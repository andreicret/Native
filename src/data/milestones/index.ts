import m2 from "./m2";

export type MilestoneComponent = "m1-overview" | "m2-discovery" | "m3-wireframe";

export interface MilestoneSection {
  title: string;
  content?: string;
  component?: MilestoneComponent;
  wide?: boolean;
  href?: string;
  linkText?: string;
}

export interface Milestone {
  id: string;
  title: string;
  short: string;
  component?: MilestoneComponent;
  sections: MilestoneSection[];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const milestones: Milestone[] = [
  { id: "m1", title: "Fiki & Project description", short: "Fiki", component: "m1-overview", sections: [] },
  m2,
  {
    id: "m3",
    title: "Wireframe & Landing page",
    short: "Wireframe",
    sections: [
      { title: "Wireframe", component: "m3-wireframe" },
      { title: "Landing page", href: `${base}/landing/`, linkText: "Visit the Native landing page" },
    ],
  },
  {
    id: "m4",
    title: "Persona, Flow, User stories / Use cases, Architecture",
    short: "Persona & Flow",
    sections: [
      { title: "Persona", content: "" },
      { title: "User flow", content: "" },
      { title: "User stories / Use cases", content: "" },
      { title: "Architecture", content: "" },
    ],
  },
  {
    id: "m5",
    title: "Validation 2 (design, UX)",
    short: "Validation 2",
    sections: [
      { title: "Design and UX validation", content: "" },
      { title: "Feedback and improvements", content: "" },
    ],
  },
  {
    id: "m6",
    title: "Market research",
    short: "Market research",
    sections: [{ title: "Research and findings", content: "" }],
  },
  {
    id: "m7",
    title: "MVP",
    short: "MVP",
    sections: [
      { title: "Minimum viable product", content: "" },
      { title: "Demo and implementation", content: "" },
    ],
  },
  {
    id: "m8",
    title: "First sale",
    short: "First sale",
    sections: [{ title: "First sale and results", content: "" }],
  },
  {
    id: "m9",
    title: "Slides",
    short: "Slides",
    sections: [{ title: "Presentation slides", content: "" }],
  },
  {
    id: "m11",
    title: "Overall project presentation (Fiki - final version)",
    short: "Final Fiki",
    sections: [{ title: "Final project presentation", content: "" }],
  },
];