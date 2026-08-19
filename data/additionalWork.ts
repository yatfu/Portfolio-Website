import type { ProjectTag } from './featuredWork';

// Lightweight entries for the homepage's "Additional Work" grid — just
// enough for a card (no detail page, no slug/sections/links like Project has).
export type AdditionalWork = {
  title: string;
  summary: string;
  tags: ProjectTag[];
};

export const additionalWork: AdditionalWork[] = [
  {
    title: 'AAPL Market Data Analysis',
    summary: 'Performed big data analytics and created regression AI models to identify correlations between common stock-trading indicators and stock price',
    tags: [{ label: 'Python', color: "bg-orange-950" }, { label: 'Scikit', color: "bg-orange-950" }],
  },
  {
    title: 'Software Development Support — A Home: Not Paradise',
    summary: 'Implemented a login system and interface to simulate airline check-in',
    tags: [{ label: 'HTML/CSS/JS', color: "bg-orange-950" }],
  },
  {
    title: 'StudyMatchs',
    summary: 'A study group matchmaking app built with React and MongoDB featuring chat, discovery, and scheduling tools',
    tags: [{ label: 'Javascript' }, { label: 'MongoDB' }, { label: 'React', color: 'bg-blue-900' }],
  },
  {
    title: 'Event Planner App',
    summary: 'Web interface for creating and editing calendar (.ics) files, with timezone-accurate date-times using geolocation API',
    tags: [{ label: 'HTML/CSS/JS' }, { label: 'Tag Two', color: 'bg-blue-900' }],
  },
];
