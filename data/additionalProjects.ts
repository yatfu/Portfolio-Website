import type { ProjectTag } from './featuredWork';

// Lightweight entries for the homepage's "Additional Projects" grid — just
// enough for a card (no detail page, no slug/sections/links like Project has).
export type AdditionalProject = {
  title: string;
  summary: string;
  coverImage?: string;
  tags: ProjectTag[];
};

export const additionalProjects: AdditionalProject[] = [
  {
    title: 'Project Title',
    summary: 'One or two sentence summary of the project.',
    coverImage: '',
    tags: [{ label: 'Tag One' }, { label: 'Tag Two', color: 'bg-blue-900' }],
  },
];
