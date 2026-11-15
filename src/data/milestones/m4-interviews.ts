export interface InterviewTurn {
  speaker: "Andrei" | "Nick" | "Vlad" | "Dan" | "Ioan" | "Mihai";
  text: string;
}

export interface InterviewTopic {
  id: string;
  title: string;
  turns: InterviewTurn[];
}

export const interviewers = ["Andrei", "Nick"];
export const participants = ["Vlad", "Dan", "Ioan", "Mihai"];

export const findings = [
  {
    title: "Knowing words does not always translate into speaking",
    evidence: "Ioan described knowing words but struggling to put them into sentences spontaneously. Vlad emphasized the pressure of real-time human interaction. Dan said vocabulary practice had not taught him to speak or write French.",
    implication: "Prioritize sentence construction and contextual speaking practice. Explore guided conversation as a hypothesis to test, not a validated solution.",
  },
  {
    title: "The lesson grid is not a clear starting point",
    evidence: "Dan found the first screen crowded and wanted lesson descriptions. Vlad wanted a home screen with learning history or progress, with lesson selection on a secondary screen and a Back button.",
    implication: "Revise the wireframe to introduce a home/progress view, fewer visible lessons with short descriptions, and explicit back navigation.",
  },
  {
    title: "Learning skills and content topics need separate labels",
    evidence: "Mihai initially interpreted categories as vocabulary, speaking, grammar and listening. Vlad suggested using skills as the main categories and topics such as music, art and history as subcategories; Dan agreed.",
    implication: "Separate the learning goal or skill from the topic filter, and test whether the revised labels are understood without explanation.",
  },
  {
    title: "Real conversations are a promising content direction",
    evidence: "Ioan and Dan expected a conversation between real people about the selected topic. Dan associated real speakers with credibility and attention. Vlad preferred a consistent choice between real people and fictional characters.",
    implication: "Prototype a consistent real-person video format and test engagement. These are stated preferences, not evidence that real footage improves learning outcomes.",
  },
  {
    title: "There is no single preferred video length",
    evidence: "Vlad preferred 2-3 minutes; Ioan and Mihai preferred 5-10 minutes. Mihai suggested breaking a longer video into sections with questions in between, and described learning during his commute or in the evening.",
    implication: "Test short, resumable segments with practice between them rather than assuming one duration suits everyone.",
  },
  {
    title: "Exercises should reinforce the lesson, not just activity",
    evidence: "Vlad wanted questions about vocabulary introduced in the video and found the progress indicator useful. Dan wanted Cambridge-style word-choice and verb-form exercises, and said he had repeatedly chosen easy lessons without feeling progress.",
    implication: "Link exercises to the video, show the workload before starting, and test appropriate challenge alongside progress through the lesson.",
  },
  {
    title: "Feedback preferences depend on the learner",
    evidence: "Mihai preferred an end-of-session report because live correction would interrupt him. Vlad wanted feedback options adapted to proficiency and preference; Ioan wanted to choose the session's learning goal.",
    implication: "Prototype a choice of session goal and feedback timing. Compare end-of-session feedback with optional live correction instead of imposing one approach.",
  },
  {
    title: "Everyday usefulness matters more than premium access alone",
    evidence: "Mihai and Dan reported using free versions. Mihai would rather pay for tutoring or a course, and Ioan agreed. Participants described motivation in terms of practical communication, fewer hesitations and overcoming the language barrier.",
    implication: "Evaluate whether learners can use what they practise in real situations before testing a paid offer. The discussion does not establish willingness to pay for Native.",
  },
];

export const interviewTopics: InterviewTopic[] = [
  {
    id: "experience",
    title: "Real-world language use and learning habits",
    turns: [
      { speaker: "Andrei", text: "Have you needed to have a conversation in a foreign language in the past year?" },
      { speaker: "Mihai", text: "Yes. I use English with colleagues at work, both in messages and in meetings." },
      { speaker: "Vlad", text: "Yes, I have spoken English with Erasmus students." },
      { speaker: "Dan", text: "I used English at work because the company was British, and I also use it with friends from other countries online." },
      { speaker: "Ioan", text: "I have used English at university with international students." },
      { speaker: "Andrei", text: "Have you taken steps to improve these skills? What methods do you use? Have you tried anything else?" },
      { speaker: "Mihai", text: "I would like to improve, although I am not particularly motivated at the moment. I use Duolingo because it only takes about 15 minutes a day." },
      { speaker: "Vlad", text: "I had tutoring to prepare for Cambridge exams, but I am not doing that anymore." },
      { speaker: "Dan", text: "I used Duolingo three or four years ago, but stopped because I did not feel I was learning the language. About a month after stopping, I had forgotten almost everything. I have also had English tutoring, and I would like to start studying grammar again." },
      { speaker: "Ioan", text: "I have used Duolingo, and I also watch films and series in English to learn." },
      { speaker: "Andrei", text: "Have you paid for language-learning apps?" },
      { speaker: "Mihai", text: "No, I have only used the free version." },
      { speaker: "Dan", text: "I have only used the free version too." },
      { speaker: "Nick", text: "Was that because the price seemed too high, or because the premium features did not seem worth paying for?" },
      { speaker: "Mihai", text: "I do not think they are worth it. If I were going to pay to learn a language, I would rather pay for tutoring or a course." },
      { speaker: "Ioan", text: "I agree." },
      { speaker: "Andrei", text: "Have you used vocabulary, listening or speaking exercises on Duolingo? Which were most useful?" },
      { speaker: "Ioan", text: "Vocabulary. I learned many new words." },
      { speaker: "Dan", text: "Vocabulary for me too. But I kept moving from chapter to chapter without really consolidating anything. I learned words, not how to speak the language. I could not write in French either." },
    ],
  },
  {
    id: "navigation",
    title: "First impressions of the wireframe and navigation",
    turns: [
      { speaker: "Nick", text: "We would like to show you our proposed solution and get your thoughts on an early interface. Looking at the first screen, how do you think you could interact with it?" },
      { speaker: "Mihai", text: "I can select the language, level and category, then choose a lesson." },
      { speaker: "Nick", text: "What would you expect or want to see in the profile section?" },
      { speaker: "Mihai", text: "A digital avatar that looks like me, statistics, achievements and a streak." },
      { speaker: "Nick", text: "What would you change about the first screen? Is it easy to navigate, or too crowded?" },
      { speaker: "Dan", text: "It feels quite bulky and crowded. I would like descriptions for the lessons." },
      { speaker: "Andrei", text: "What about showing fewer lessons with short descriptions?" },
      { speaker: "Dan", text: "That sounds much better. Is this what users would see when they first open the app?" },
      { speaker: "Vlad", text: "I was going to ask the same thing. I would want a home page. This feels like a difficult starting point." },
      { speaker: "Nick", text: "What would you want on that page instead?" },
      { speaker: "Vlad", text: "Perhaps a history of what I have done in the app, or a progress bar." },
      { speaker: "Andrei", text: "Would it be useful to separate grammar and vocabulary exercises?" },
      { speaker: "Mihai", text: "I initially thought that was what the categories meant: vocabulary, speaking, grammar and listening, rather than art, music or history." },
      { speaker: "Vlad", text: "Music, history and art could be subcategories for practising conversations in those areas. The main categories could be writing, speaking and listening." },
      { speaker: "Dan", text: "I agree with Vlad." },
      { speaker: "Vlad", text: "To sum up my thoughts on the first wireframe screen, it should be a secondary screen, and I would need a Back button." },
    ],
  },
  {
    id: "video",
    title: "Video content, presentation and duration",
    turns: [
      { speaker: "Nick", text: "Looking at the video screen, what would you expect to see in the video?" },
      { speaker: "Ioan", text: "A conversation between two people about a topic I selected." },
      { speaker: "Dan", text: "The same for me: something professional, with people having a conversation." },
      { speaker: "Nick", text: "How do you compare material featuring real people with material featuring fictional characters or animation?" },
      { speaker: "Dan", text: "Real people speaking would feel more professional and give me more confidence that I would actually learn. Duolingo feels more aimed at beginners, where you are shown things and hope some of it sticks." },
      { speaker: "Vlad", text: "I would not mix the two approaches. I would use either real people or fictional characters." },
      { speaker: "Nick", text: "Would seeing real people make the material feel more trustworthy?" },
      { speaker: "Dan", text: "I would try to pay more attention and put in more effort if I saw real people." },
      { speaker: "Nick", text: "How long would you be willing to watch a video like this?" },
      { speaker: "Ioan", text: "Generally, I would prefer five to ten minutes." },
      { speaker: "Mihai", text: "I would also want five to ten minutes. If a video were longer, say 30 minutes, I would want it broken into sections with questions in between so I did not get bored on my phone: a longer video interspersed with exercises." },
      { speaker: "Vlad", text: "I would prefer shorter videos, perhaps two or three minutes." },
    ],
  },
  {
    id: "practice",
    title: "Exercises, progress and meaningful challenge",
    turns: [
      { speaker: "Nick", text: "What do you think happens on the final screen?" },
      { speaker: "Vlad", text: "These look like the exercises we discussed. After watching the video, you complete tasks based on it." },
      { speaker: "Nick", text: "That is right. Is the progress bar useful?" },
      { speaker: "Vlad", text: "Yes. Do all videos have the same exercise format and a standard number of exercises?" },
      { speaker: "Nick", text: "The number will vary, but it will be shown before you begin." },
      { speaker: "Nick", text: "What kinds of exercises would help you use the language?" },
      { speaker: "Dan", text: "I would like exercises similar to Cambridge tests: choosing the best word from five options, for example, or putting a verb into the correct form. I would want professionally structured exercises." },
      { speaker: "Andrei", text: "Something like the Use of English section of a Cambridge exam?" },
      { speaker: "Dan", text: "Yes, that is the kind of format I mean." },
      { speaker: "Vlad", text: "If I have watched a video about a topic, such as household objects, the most useful thing would be to reinforce the terms and information I have just heard. The questions should focus on the new vocabulary introduced in that video." },
      { speaker: "Nick", text: "We are focusing on young people who want to use a language at work, consume media or travel abroad. When during the day do you use Duolingo or similar apps?" },
      { speaker: "Mihai", text: "On the tram, on my way to work or back home. Sometimes I am on my phone in the evening and get a reminder that I have not done a lesson that day." },
      { speaker: "Nick", text: "What frustrates you most about the way current apps are structured?" },
      { speaker: "Dan", text: "Duolingo felt designed to keep me coming back and make things easy. Unless I was pushed to do something harder, I would keep choosing the easiest lessons, and nothing really stuck. I felt I was playing Duolingo rather than making progress." },
    ],
  },
  {
    id: "conversation",
    title: "Speaking barriers and priorities for a short session",
    turns: [
      { speaker: "Nick", text: "When speaking a foreign language, what is hardest: finding words, or using the correct tense and grammar, such as irregular past-tense verbs in English?" },
      { speaker: "Ioan", text: "Finding my words. I do not do it all the time, so when I suddenly need to speak English, I need a moment to think." },
      { speaker: "Nick", text: "Would more vocabulary exercises help, or do you already know the words but struggle to put them into a sentence?" },
      { speaker: "Ioan", text: "The second one." },
      { speaker: "Vlad", text: "What is missing from current solutions is human interaction: being put on the spot and having to find your words. You are not used to speaking every day, and that is the most important part." },
      { speaker: "Andrei", text: "Thank you. Hearing a different perspective, including your wireframe feedback, helps us understand how to create a better experience for potential users. We appreciate your help." },
      { speaker: "Nick", text: "If you had only 15 minutes a day, what would you focus on: Cambridge-style exercises, illustrated vocabulary tasks, or observing a natural conversation?" },
      { speaker: "Mihai", text: "I would most like to watch a conversation and, if it is feasible, take part in it myself. That would challenge me. Perhaps AI could make that possible." },
    ],
  },
  {
    id: "feedback",
    title: "Feedback preferences and motivation",
    turns: [
      { speaker: "Nick", text: "If you made mistakes while speaking, would you prefer live correction or a report at the end?" },
      { speaker: "Mihai", text: "Live correction would be frustrating and distracting. I would prefer a report at the end." },
      { speaker: "Vlad", text: "It depends on the learner's level. The app should take that into account and offer options for the kind of feedback the user wants." },
      { speaker: "Ioan", text: "Communication matters most, but you need to know your goal. As Vlad said, I should be able to choose what I want to focus on today, such as communication or vocabulary." },
      { speaker: "Dan", text: "For a 15-minute session, it depends on the user: perhaps vocabulary, or Cambridge-style grammar." },
      { speaker: "Nick", text: "What would motivate you to improve: formal progress statistics, feedback from colleagues, or something else?" },
      { speaker: "Dan", text: "It would have to be genuinely useful. If I moved to France and needed the language, for example, I would have a reason to learn. So far, I have not had that motivation on my own." },
      { speaker: "Ioan", text: "I want to stop freezing when I actually need to speak to someone. I would like to speak with fewer hesitations." },
      { speaker: "Vlad", text: "Overcoming the language barrier and being able to communicate with a local person." },
      { speaker: "Mihai", text: "Much the same as the others. I want feedback that I am doing well and that what I learn is useful in everyday life." },
    ],
  },
];