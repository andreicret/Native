import type { Milestone } from "./index";

const milestone: Milestone = {
  id: "m2",
  title: "Validation 1 (idea)",
  short: "Validation 1",
  sections: [
    {
      title: "How we identified the problem",
      content:
        'The problem was identified by observing a common frustration among language learners: the illusion of fluency. We noticed that users spend months or even years on traditional language apps, maintaining impressive "streaks" and accumulating vocabulary, only to freeze when placed in a real-world conversation with a native speaker. We realized the core problem is not a lack of grammar resources, but the absence of an accessible environment designed to train conversational fluency, spontaneity, and confidence in real-life contexts.',
    },
    {
      title: "The proposed solution: the Native app",
      content:
        "Our solution shifts the paradigm from rote memorization to conversational immersion. Instead of merely testing basic translations, the app is designed to simulate authentic interactions.\n\n• It provides practical scenarios (e.g., ordering at a restaurant, job interviews, airport interactions) rather than isolated phrases.\n• By displaying captions in both languages, the app builds a subconscious cognitive bridge, helping users naturally link the two languages and accelerate their comprehension.",
    },
    { title: "Customer discovery process", component: "m2-discovery" },
    {
      title: "How the insights affected our product",
      wide: true,
      content: [
        "Looking at our 15 survey responses, we see that using a foreign language is a real part of most respondents’ lives: 14 had needed to hold a conversation in one during the last six months. Multimedia, such as films, series, videos and music, was the most frequently selected learning method, mentioned by 11 respondents. Courses or tutoring followed with 10, while seven selected conversations with other people. This supports exploring Native’s combination of multimedia content and practical conversation exercises.",
        "Studies were the most common reason for starting to learn the most recent foreign language, accounting for seven responses, or approximately 47%. This makes learners motivated by their studies a reasonable group to focus on first. However, because we distributed the survey among fellow students, colleagues and family members, we should not assume that this group represents the wider market or is necessarily our strongest customer segment.",
        "The difficulties described go beyond vocabulary and grammar. Several respondents mentioned speaking, finding someone to practise with regularly, understanding fast speech and abbreviations, or adapting to a dialect. One response specifically described the difficulty of moving from learning individual words to having a free-flowing conversation. These answers are consistent with Native’s focus on bridging the gap between understanding a language and using it naturally, although they do not establish that existing learning apps caused this gap.",
        "On their last trip, five respondents, or one third, rated their ability to communicate with locals at the lowest point on the scale. At the same time, nine rated it four or five out of five, so the experience was not uniformly difficult. Travelling somewhere whose language they had not studied could explain some low ratings, but the survey did not ask this, so we cannot draw that conclusion.",
        "Finally, 60% of respondents spent some time learning a foreign language during the previous week, while 40% spent none. Four reported less than 15 minutes, four reported between 15 minutes and one hour, and one reported between one and three hours. This suggests that limited learning time is worth considering when designing Native’s lessons. It does not, however, show that respondents would commit to five or ten minutes of daily practice.",
      ].join("\n\n"),
    },
    {
      title: "Are we ready for Customer Validation?",
      wide: true,
      content:
        "We do not consider ourselves ready to move to Customer Validation yet. We are still collecting data, and the current responses provide initial direction rather than enough evidence to start testing sales. Over the following weeks, we hope to gather more responses to better understand our target customers and assess whether we are ready to move forward.",
    },
  ],
};

export default milestone;