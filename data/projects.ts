export type ProjectTag = {
  label: string;
  // Tailwind background class for this tag's pill, e.g. 'bg-blue-900'. Omit for the default gray.
  color?: string;
};

// Building blocks for a section's body. Mix and match in any order:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: '/your-image.png', alt: '...' }        — src can be a /public path or full URL
//   { type: 'video', src: '/your-video.mp4', poster: '/optional-poster.png' }
export type ProjectBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string };

export type ProjectSection = {
  title: string;
  blocks: ProjectBlock[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  coverImage?: string;
  tags: ProjectTag[];
  liveUrl?: string;
  repoUrl?: string;
  // Rendered on the project page as titled subsections, in order.
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: 'project-boilerplate',
    title: 'Project Title',
    summary: 'One or two sentence summary of the project.',
    coverImage: '',
    tags: [{ label: 'Tag One' }, { label: 'Tag Two', color: 'bg-blue-900' }],
    liveUrl: '',
    repoUrl: '',
    sections: [
      {
        title: 'Overview',
        blocks: [{ type: 'paragraph', text: 'What the project is and why you built it.' }],
      },
      {
        title: 'Process',
        blocks: [
          { type: 'paragraph', text: 'Key decisions, tools, and how you approached it.' },
          {
            type: 'paragraph',
            text: 'Add an image or video block here — see the ProjectBlock type above for the shape.',
          },
        ],
      },
      {
        title: 'Outcome',
        blocks: [{ type: 'paragraph', text: 'What shipped, what you learned, results or metrics if any.' }],
      },
    ],
  },
  {
    slug: 'budget-viz-next',
    title: 'Budget Viz',
    summary: 'A streamlined budgeting tool, designed with concise visuals, requiring minimal input',
    coverImage: '',
    tags: [
      { label: 'NextJS', color: 'bg-orange-950' },
      { label: 'Tailwind CSS', color: 'bg-orange-950' },
      { label: 'PostgreSQL', color: 'bg-blue-950' },
      { label: 'NodeJS', color: 'bg-blue-950' },
      { label: 'Vercel' },
    ],
    liveUrl: 'https://budget-vis-next.vercel.app/',
    repoUrl: 'https://github.com/yatfu/budget-vis-next',
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: `I built a full-stack budgeting application that helps users track their spending over time. 
            Users can manage monthly expense categories, visualize their budgets on a single dashboard, and explore analytics such as yearly spending trends and net cash flow.`,
          },
          {
            type: 'paragraph',
            text: `The main purpose of developing this app was to update my understanding of the current technology, learn how to use AI in development, and shake the rust off my developer skills.`
          },
        ],
      },
      {
        title: 'Architecture',
        blocks: [
          { type: 'paragraph', text: 'I chose NextJS, PostgreSQL, Tailwind, ChartJS, Vercel, and Neon as my tech stack.' },
          { type: 'image', src: '/lab.png', alt: 'Diagram of budget visualizer architecture' },
          {
            type: 'paragraph',
            text: ` Originally a MERN project, I chose NextJS because it has its own app router and API router, forgoing need for Express. 
            I first chose MongoDB for my database because I used it on previous projects, but switched to PostgreSQL because it was a better fit for the save method I was implementing (diffing old and new tables).
            Vercel and Neon seemed like the simplest approach to have CD.`,
          },
        ]
      },
      {
        title: 'Process',
        blocks: [
          { type: 'paragraph', text: 'Key decisions, tools, and how you approached it.' },
          {
            type: 'paragraph',
            text: `Most of the decisions I made were with the backend, the biggest decision being the save function. My first approach was to compare each expense, format any changes into its respective SQL call, then push the change into the DB, one at a time.
            The simplicity of this approach had a trade off of costing numerous amounts of database calls.`,
          },
          { type: 'paragraph', text: 'The first improvement was batching SQL queries, then only committing the queries after all of them succeeded. This prevented partial saves and reduced number of database calls.' },
          { type: 'paragraph', text: `One of my biggest mistakes was getting the diff function wrong. My function instead duplicated the entire table, which was then pushed into the database.
          Because of this my monthly compute limit maxed out in less than 10 calls, without any visible error.` },
        ],
      },
      {
        title: 'AI Usage',
        blocks: [
          { type: 'paragraph', text: `I used both ChatGPT and Claude Code for different things. ChatGPT replies faster than Claude's fastest models, so I used that to help navigate implementation and help me if I wanted to figure out a solution to a problem without having it done for me, e.g. the save function.
          `},
          { type: 'paragraph', text: `I created a workflow for Claude agents to fix simple things like Typescript errors. I also had it manage (not create) the UI for my entire app, ensuring consistency. `},
          { type: 'paragraph', text: `Claude was mainly used for two things: UI consistency and Typescript errors. Both of these are easily handled through AI workflows, and saved enormous amounts of time otherwise spent fixing manually.`},
          { type: 'paragraph', text: `If I were to make this program again without the intention to learn, I would `},
        ]
      },
    ],
  },
];
