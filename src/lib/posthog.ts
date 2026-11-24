import type { PostHog } from "posthog-js";

export const waitlistSurvey = {
  id: "01a20f5a-9246-0000-bf15-01580ce0f7ba",
  questionId: "1f3eaf5d-4870-4c4c-8c92-f76fd88a0ea1",
  question: "Adresa ta de e-mail",
};

const projectToken = import.meta.env.PUBLIC_POSTHOG_PROJECT_TOKEN?.trim();
const configuredHost = import.meta.env.PUBLIC_POSTHOG_HOST?.trim();
const consentKey = "native_analytics_consent";
export const isPostHogConfigured = Boolean(projectToken && configuredHost);
export type AnalyticsChoice = "accepted" | "rejected";
export type LandingEvent = "native_language_selected" | "native_signup_started" | "native_signup_attempted" | "native_signup_accepted" | "native_signup_failed";
let analyticsAllowed = false;
let client: PostHog | undefined;
let loadingClient: Promise<PostHog | undefined> | undefined;
let pageTracked = false;
let surveyShown = false;
let surveyObserver: IntersectionObserver | undefined;
let visitorId: string | undefined;

function getApiHost() {
  if (!projectToken || !configuredHost) throw new Error("PostHog is not configured");
  const host = new URL(configuredHost);
  if (host.protocol !== "https:") throw new Error("PostHog requires HTTPS");
  return host.origin;
}

export function getVisitorId() {
  if (analyticsAllowed && client) return client.get_distinct_id();
  visitorId ??= crypto.randomUUID();
  return visitorId;
}

export function getLandingContext() {
  const parameters = new URLSearchParams(location.search);
  const campaign: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = parameters.get(key)?.trim().slice(0, 160);
    if (value && !value.includes("@")) campaign[key] = value;
  }
  return {
    app: "native-landing",
    environment: import.meta.env.PROD ? "production" : "development",
    $current_url: `${location.origin}${location.pathname}`,
    $host: location.hostname,
    $pathname: location.pathname,
    ...campaign,
  };
}

export function getAnalyticsChoice(): AnalyticsChoice | undefined {
  try {
    const choice = localStorage.getItem(consentKey);
    if (choice === "accepted" || choice === "rejected") return choice;
  } catch {}
  return undefined;
}

export function hasAnalyticsConsent() {
  return analyticsAllowed;
}

export async function setAnalyticsChoice(choice: AnalyticsChoice) {
  analyticsAllowed = choice === "accepted";
  try { localStorage.setItem(consentKey, choice); } catch {}
  if (!analyticsAllowed) {
    surveyObserver?.disconnect();
    client?.stopSessionRecording();
    client?.opt_out_capturing();
    return;
  }
  const instance = await startAnalytics();
  if (instance && analyticsAllowed) document.dispatchEvent(new Event("native:analytics-ready"));
}

function safeUrl(value: unknown) {
  if (typeof value !== "string" || !value) return "";
  try {
    const url = new URL(value, location.origin);
    return `${url.origin}${url.pathname}`;
  } catch { return ""; }
}

function observeSurvey(instance: PostHog) {
  if (surveyShown) return;
  const section = document.querySelector("[data-email-signup]");
  if (!section) return;
  surveyObserver?.disconnect();
  surveyObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || !analyticsAllowed || surveyShown) return;
    surveyShown = true;
    instance.capture("survey shown", { ...getLandingContext(), $survey_id: waitlistSurvey.id, $survey_iteration: 0 });
    surveyObserver?.disconnect();
  }, { threshold: 0.25 });
  surveyObserver.observe(section);
}

async function startAnalytics(): Promise<PostHog | undefined> {
  if (!analyticsAllowed || !isPostHogConfigured) return;
  if (!loadingClient) {
    loadingClient = import("posthog-js").then(({ default: posthog }) => {
      if (!analyticsAllowed) return;
      client = posthog.init(projectToken!, {
        api_host: getApiHost(),
        defaults: "2025-05-24",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        capture_exceptions: false,
        capture_performance: false,
        enable_recording_console_log: false,
        disable_surveys: true,
        person_profiles: "never",
        persistence: "localStorage",
        cross_subdomain_cookie: false,
        session_recording: {
          maskAllInputs: true,
          maskTextSelector: ".ph-mask",
          recordHeaders: false,
          recordBody: false,
        },
        before_send: (event) => {
          if (!analyticsAllowed) return null;
          for (const key of ["$current_url", "$initial_current_url", "$referrer", "$initial_referrer"]) {
            if (event.properties[key]) event.properties[key] = safeUrl(event.properties[key]);
          }
          for (const key of Object.keys(event.properties)) {
            if (key.includes("utm_") && String(event.properties[key]).includes("@")) delete event.properties[key];
          }
          delete event.properties.email;
          delete event.properties.$email;
          Object.assign(event.properties, getLandingContext());
          return event;
        },
      });
      return client;
    }).catch(() => undefined).finally(() => {
      if (!client) loadingClient = undefined;
    });
  }
  const instance = await loadingClient;
  if (!instance || !analyticsAllowed) return;
  if (instance.has_opted_out_capturing()) instance.opt_in_capturing();
  if (!pageTracked) {
    pageTracked = true;
    instance.capture("$pageview", getLandingContext());
    instance.capture("native_landing_viewed", getLandingContext());
  }
  observeSurvey(instance);
  instance.startSessionRecording();
  return instance;
}

export function trackLandingEvent(event: LandingEvent, properties: { language: string; language_selection?: "default" | "explicit" }) {
  if (!analyticsAllowed) return;
  void startAnalytics().then((instance) => {
    if (instance && analyticsAllowed) instance.capture(event, { ...getLandingContext(), ...properties });
  }).catch(() => undefined);
}

export async function submitWaitlist(email: string, language: string, submissionId: string) {
  if (!email.trim() || !language.trim() || !submissionId) throw new Error("Incomplete submission");

  const instance = analyticsAllowed ? await startAnalytics().catch(() => undefined) : undefined;
  const sessionProperties = instance && analyticsAllowed ? { $session_id: instance.get_session_id() } : {};
  const response = await fetch(`${getApiHost()}/i/v0/e/`, {
    method: "POST",
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(15000),
    body: JSON.stringify({
      api_key: projectToken,
      event: "survey sent",
      distinct_id: getVisitorId(),
      uuid: submissionId,
      timestamp: new Date().toISOString(),
      properties: {
        ...getLandingContext(),
        ...sessionProperties,
        $process_person_profile: false,
        $survey_id: waitlistSurvey.id,
        $survey_iteration: 0,
        $survey_submission_id: submissionId,
        $survey_completed: true,
        $survey_questions: [{ id: waitlistSurvey.questionId, question: waitlistSurvey.question }],
        [`$survey_response_${waitlistSurvey.questionId}`]: email.trim(),
        language,
      },
    }),
  });
  if (!response.ok) throw new Error("PostHog rejected the submission");
  const result = await response.json();
  if (Array.isArray(result?.quota_limited) && result.quota_limited.length) {
    throw new Error("PostHog quota exceeded");
  }
  if (result !== 1 && result?.status !== 1 && result?.status !== "Ok") {
    throw new Error("PostHog did not confirm the submission");
  }
}