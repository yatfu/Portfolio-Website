export type Project = {
  slug: string;
  title: string;
  summary: string;
  coverImage?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  content: string;
};

export const projects: Project[] = [
  {
    slug: 'project-boilerplate',
    title: 'Project Title',
    summary: 'One or two sentence summary of the project.',
    coverImage: '',
    tags: ['Tag One', 'Tag Two'],
    liveUrl: '',
    repoUrl: '',
    content: 'Full write-up of the project goes here. Replace this placeholder with your process, decisions, and outcome.',
  },
];
