export type ProjectTag = {
  label: string;
  // Tailwind background class for this tag's pill, e.g. 'bg-blue-900'. Omit for the default gray.
  color?: string;
};

// Building blocks for a section's body. Mix and match in any order:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: '/your-image.png', alt: '...', description: '...' }   — src can be a /public path or full URL. alt is for accessibility (not shown); description is an optional visible caption below the image.
//   { type: 'video', src: '/your-video.mp4', poster: '/optional-poster.png' }
export type ProjectBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; description?: string }
  | { type: "video"; src: string; poster?: string };

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
  // Set to false to keep this off the homepage's Featured Work grid and list it
  // on the Other Projects page instead. Omit (or true) to keep it featured.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "budget-viz-next",
    title: "Budget Viz",
    summary:
      "A full-stack budgeting platform for managing expenses and savings, with persistent data storage, authentication, and automated calculations + visualizations. ",
    coverImage: "/budget-vis-next-snapshot.PNG",
    tags: [
      { label: "Typescript", color: "bg-orange-950" },
      { label: "NextJS", color: "bg-orange-950" },
      { label: "Tailwind CSS", color: "bg-orange-950" },
      { label: "PostgreSQL", color: "bg-blue-950" },
      { label: "Node.js", color: "bg-blue-950" },
      { label: "Vercel" },
    ],
    liveUrl: "https://budget-vis-next.vercel.app/",
    repoUrl: "https://github.com/yatfu/budget-vis-next",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: `I built a full-stack budgeting application that helps users track their spending over time. 
            Users can log in and manage monthly expense categories, visualize their budgets on a single dashboard, and explore analytics such as yearly spending trends and net cash flow.`,
          },
          {
            type: "paragraph",
            text: `The purpose of developing this app was to update my understanding of current technologies and explore AI tools within development workflow.`,
          },
        ],
      },
      {
        title: "Architecture",
        blocks: [
          {
            type: "paragraph",
            text: "The tech stack includes NextJS, PostgreSQL, Tailwind, ChartJS, Vercel, and Neon. Authentication is custom using sessions stored in the database, and cookies. ",
          },
          {
            type: "image",
            src: "/lab.png",
            alt: "Diagram of budget visualizer architecture",
          },
          {
            type: "paragraph",
            text: ` Originally planned as a MERN project, I chose NextJS because its App Router and API route handler remove the need for an Express server. 
            I first chose MongoDB for my database because I used it on previous projects, but switched to PostgreSQL because it was a better fit for the save method I was implementing (diffing old and new tables).
            Vercel and Neon seemed like the simplest approach to have CD.`,
          },
          {
            type: "paragraph",
            text: `Note: This app does not need API handlers, it can run purely through NextJS Server Actions (React Server Functions). I only implemented the API as practice. `,
          },
        ],
      },
      {
        title: "Design",
        blocks: [
          {
            type: "image",
            src: "/budget-vis-next-snapshot.PNG",
            alt: "Screenshot of budget visualizer app",
          },
          {
            type: "image",
            src: "/budget-vis-next2.PNG",
            alt: "Screenshot of budget visualizer app",
          },
          {
            type: "paragraph",
            text: `This app is designed to minimize the amount of time and cognitive effort required from the user to manage their budget. 
          This means choosing the simplest budgeting method, choosing only the most useful graphs, and simplifying the UI. It also means choosing one budgeting style, which might not suit everybody.`,
          },
          {
            type: "paragraph",
            text: `The only compromise to this goal was choosing manual over automatic (linking bank accounts) budget entry. I chose manual over automatic because entering the data yourself
          is important for remembering it. Automatic entry is better for visualizing the data as a whole, but manual entry gives the user more intentionality, encouraging them to engage with their spending decisions.`,
          },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          {
            type: "paragraph",
            text: `My biggest challenge when creating the backend was the save function. My first approach was to compare each expense, format any changes into its respective SQL call, then push the change into the DB, one at a time.
            The simplicity of this approach had a trade off of having many unneccessary database calls.`,
          },
          {
            type: "paragraph",
            text: "Improvements included batching SQL queries to reduce database calls, and preventing partial saves with DB commits.",
          },
          {
            type: "paragraph",
            text: `One of my biggest mistakes was getting the diff function wrong. The function was supposed to compare the old data to the new data, which it did. However, when the user logs in and the user data is loaded, it loads the data of ALL the months. 
            When I queried the old data, i only included the data of the existing month, because you can only edit one month at a time. All of the data from other months would then count as new expenses to add to the database. This resulted in my database doubling in size every save,
            leading to me burning through my monthly compute limit within less than an hour.`,
          },
        ],
      },
      {
        title: "AI Usage",
        blocks: [
          {
            type: "paragraph",
            text: `I used both ChatGPT and Claude Code for different things. ChatGPT replies faster than Claude's fastest models, so I used that to help navigate implementation and help me through sticking points, e.g. the save function.
          `,
          },
          {
            type: "paragraph",
            text: `I created workflows for Claude agents to fix Typescript errors and manage the UI styling. Both of these tasks are easily handled through AI workflows, and saved enormous amounts of time otherwise spent fixing manually.`,
          },
        ],
      },
      {
        title: "Reflection",
        blocks: [
          {
            type: "paragraph",
            text: `Budget Viz is a good demonstration of the functionality, but is surface level. It needs improvements to reliability and performance, and structure for long term development.
              There is no protection against api call spam. if I were to continue to develop the app, I would first add a CI workflow for testing.
              Redis could be used to increase performance since many actions currently require a database call, including switching between months in the dashboard.
              Account security isn't the biggest concern with this app, but I would also improve the custom auth system or use an auth library. `,
          },
          {
            type: "paragraph",
            text: `My next project would focus more on these deeper topics within software engineering.`,
          },
        ],
      },
    ],
  },
  {
    slug: "crossing-rain",
    title: "Crossing Rain Official Site",
    summary: "Official website for idol group Crossing Rain",
    coverImage: "/crossingRain.gif",
    tags: [
      { label: "Webflow", color: "bg-orange-950" },
      { label: "Blender", color: "bg-cyan-950" },
      { label: "Figma", color: "bg-cyan-950" },
      { label: "FL Studio", color: "bg-cyan-950" },
    ],
    liveUrl: "https://crossingrain.webflow.io/",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "Crossing Rain's website was part of an overhaul of the group's creative direction. It's a multimedia showcase of the idol group Crossing Rain, with the goals of strengthening the credibility of Crossing Rain as a Hawaii based idol group, and increasing revenue through their fan club, Thunder League. ",
          },
          {
            type: "image",
            src: "/crossingRain.gif",
            alt: "",
          },
          {
            type: "paragraph",
            text: "My responsibility was to ideate, design, prototype, and develop the website and art assets.",
          },
          {
            type: "paragraph",
            text: `Along with the creation of the website, I had to ensure that maintanence of the website was feasible for people unfamiliar with the project since I would not be doing it after it was completed. `,
          },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Figma was used for design, prototyping, and the collaboration hub. I chose webflow as the platform for the website because it is built with UI components similar to React. , 3D assets and scene built in Blender, ",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "paragraph",
            text: "The ideation process was challenging because of how open-ended my assignment was. Because the art direction was changing, I ideated and implemented until  ",
          },
          {
            type: "paragraph",
            text: "The first website mockup was intended to be a visual upgrade of their previous website, adding inspiration from recent music videos of Crossing rain and websites from K-Pop groups. This iteration was rejected because it was too similar to an actual website, and the project manager wanted something less standard.",
          },
          {
            type: "image",
            src: "/crossingRain/Ideation.png",
            alt: "",
            description:
              "The first website mockup inspired by Crossing rain music videos and official K-Pop websites",
          },
          {
            type: "paragraph",
            text: "The second website mockup was designed more like a game UI than a website. The idea was originally a Spline3D scene that had interactive 3D components. Because it would be difficult for other people to maintain the website, I decided to replace it with images.",
          },
          {
            type: "image",
            src: "/crossingRain/Ideation2.png",
            alt: "",
            description:
              "The second website mockup inspired by video game UI and my room. ",
          },
          {
            type: "image",
            src: "/crossingRain/3Dscene2.png",
            alt: "",
            description:
              "Blender scene - all models were created from scratch for cohesion",
          },
          {
            type: "image",
            src: "/crossingRain/Prototype.png",
            alt: "",
            description: "Flow chart prototype",
          },
        ],
      },
      {
        title: "Reflection",
        blocks: [
          {
            type: "paragraph",
            text: `Overall this project was a success, especially as my first time freelancing. I successfully completed a project not knowing what or how I was making it, not knowing the tools I was using, until I figured it out.`,
          },
          {
            type: "paragraph",
            text: `One lesson I learned the hard way was to ask for feedback often. I designed all the pages for the website before I showed it to the team, and needed to scrap the whole thing. A lot of effort would be saved by asking for feedback before committing to implementation. `,
          },
          {
            type: "paragraph",
            text: `My biggest failure working on this project was not simplifying the website enough for non-technical editors. It was easy to edit text,
             but editing the components themselves was difficult, on a similar level to editing a React component. Even the creative director struggled with simple changes like adding another home button.
             In hindsight, I should have used a simpler CMS to develop the website on. Component-based UI is intuitive for programmers but not for designers.
             I would probably use Framer instead, where editing UI acts more like Photoshop elements. The current iteration of the website has issues because someone wanted to add a feature after the website was finished. `,
          },
        ],
      },
    ],
  },
  {
    slug: "doraku-menu",
    title: "Doraku Sushi Mobile Menu",
    summary:
      "Prototype for a restaurant menu with JSON as input, a fully custom website as output",
    coverImage: "/dorakumenu/Capture2.PNG",
    tags: [
      { label: "React", color: "bg-orange-950" },
      { label: "HTML/CSS/JS", color: "bg-orange-950" },
      { label: "Netlify" },
    ],
    liveUrl: "https://dorakumenu.netlify.app/",
    repoUrl: "https://github.com/yatfu/Online-Menu---Doraku/tree/main",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "This project is a mobile menu that dynamically renders its components from JSON data. This solves a major problem that I noticed restaurants face as their menu changes constantly due to price changes, recipe changes, and menu changes.",
          },
          {
            type: "image",
            src: "/dorakumenu/Capture.PNG",
            alt: "",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "paragraph",
            text: "The implementation was straightforward, turn Excel data into JSON data and build components around the JSON data. However there were a few issues outside of implementation.",
          },
          {
            type: "paragraph",
            text: "User cellular speed and usage was one bottleneck I had to deal with. Many customers at Doraku still have older phones and have limited data plans. One of my ideas was to have each menu item pop up an image, but it caused the app to be too slow and used too much data. ",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "paragraph",
            text: "One thing I took away from this was the value of having user feedback. The slow-loading issue wasn't an issue until someone else used it because I was always testing from my own phone with 5G. ",
          },
        ],
      },
    ],
  },
  {
    slug: "chatroom",
    title: "Ephemeral Chat Platform - In Progress",
    summary: `A project focused on system design. Developed a distributed real-time messaging system with multi-instance communication, persistent messaging, and automated 24-hour room expiration, following Scrum framework. 
    Currently focusing on deeper topics such as deployment, scaling with load balancing, automation with CI/CD, reliability, and observability. `,
    coverImage: "",
    tags: [
      { label: "TypeScript", color: "bg-orange-950" },
      { label: "NextJS", color: "bg-orange-950" },
      { label: "Redis", color: "bg-blue-950" },
      { label: "PostgreSQL", color: "bg-blue-950" },
      { label: "WebSocket", color: "bg-blue-950" },
      { label: "Docker", color: "bg-purple-950" },
      { label: "Kubernetes/EKS", color: "bg-purple-950" },
      { label: "AWS", color: "bg-purple-950" },
      { label: "CI/CD" },
      { label: "Agile" },
    ],
    liveUrl: "",
    repoUrl: "",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: `PHASE 1
            CORE PRODUCT
                ↓
            [CORE]
            Next.js + TypeScript
            PostgreSQL
            WebSockets
            Redis
            Authentication
            Ephemeral messages
            Message expiration
                ↓
            
            PHASE 2
            PRODUCTIONIZATION
                ↓
            [CORE]
            Docker
            AWS
            CI/CD
            Environment configuration
            Secrets management
            Health checks
            
            [WORTH LEARNING]
            Terraform
                ↓
            
            PHASE 3
            SCALABILITY
                ↓
            [CORE]
            Load balancing
            Horizontal scaling
            Redis Pub/Sub
            Database connection pooling
            
            [WORTH LEARNING]
            Kubernetes
            AWS EKS
            Stateless architecture
                ↓
            
            PHASE 4
            RELIABILITY
                ↓
            [CORE]
            Idempotency
            Message acknowledgements
            Message recovery
            WebSocket reconnection
            Retries + exponential backoff
            Graceful shutdown
            Fault handling
            
            [WORTH LEARNING]
            Delivery guarantees
            Failure injection / chaos testing
                ↓
            
            PHASE 5
            PERFORMANCE
                ↓
            [CORE]
            Load testing
            Bottleneck identification
            Database/query optimization
            
            [WORTH LEARNING]
            Caching strategies
            Capacity planning
            WebSocket performance optimization
                ↓
            
            PHASE 6
            OBSERVABILITY
                ↓
            [CORE]
            Structured logging
            Metrics
            Error tracking
            Dashboards
            Alerting
            
            [WORTH LEARNING]
            OpenTelemetry
            Distributed tracing
            Prometheus + Grafana
            SLIs / SLOs
                ↓`,
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "paragraph",
            text: "Designing with reliability in mind",
          },
          {
            type: "paragraph",
            text: "Key decisions, tools, and how you approached it.",
          },
          {
            type: "paragraph",
            text: "Key decisions, tools, and how you approached it.",
          },
          {
            type: "paragraph",
            text: "Key decisions, tools, and how you approached it.",
          },
          {
            type: "paragraph",
            text: "Add an image or video block here — see the ProjectBlock type above for the shape.",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "paragraph",
            text: "What shipped, what you learned, results or metrics if any.",
          },
        ],
      },
    ],
  },
];

/**
 * 
 * 
 *       {
        title: 'AI Usage',
        blocks: [
          { type: 'paragraph', text: `I used both ChatGPT and Claude Code for different things. ChatGPT replies faster than Claude's fastest models, so I used that to help navigate implementation and help me if I wanted to figure out a solution to a problem without having it done for me, e.g. the save function.
          `},
          { type: 'paragraph', text: `I created a workflow for Claude agents to fix simple things like Typescript errors. I also had it manage (not create) the UI for my entire app, ensuring consistency. `},
          { type: 'paragraph', text: `Claude was mainly used for two things: UI consistency and Typescript errors. Both of these are easily handled through AI workflows, and saved enormous amounts of time otherwise spent fixing manually.`},
          { type: 'paragraph', text: `If I were to make this program again without the intention to learn, I would `},
        ]
      },
 */
