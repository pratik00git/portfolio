// Single source of truth for all portfolio content.
// Update this file to change what appears on the site.

// Public URL of the deployed site, used for canonical links, sitemap and social previews.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://your-domain.com) in your hosting environment.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export function yearsSince(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / (365.25 * 24 * 3600 * 1000));
}

// Search engine ownership tokens. Set these in Vercel → Settings → Environment Variables
// with the code each console gives you, then redeploy.
export const siteVerification = {
  google: process.env.GOOGLE_SITE_VERIFICATION,
  bing: process.env.BING_SITE_VERIFICATION,
};

export const profile = {
  name: "Pratik Thakkar",
  initials: "PT",
  role: "Web Application Engineer",
  roles: ["Web Application Engineer", "Next.js & React Expert", "Frontend Specialist", "AI-powered UI Builder"],
  tagline: "I design, build and maintain modern web applications end-to-end — frontend-first with Next.js & React, and AI-ready.",
  location: "Anand, Gujarat, India",
  email: "thapratik00@gmail.com",
  phone: "+91 94273 52211",
  resume: "/Pratik-Thakkar-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/pratik-thakkar-203004185/",
  github: "https://github.com/pratik00git",
  careerStart: new Date(2020, 11, 1), // Dec 2020
  about: [
    "I'm a web application engineer who builds and maintains all kinds of web apps — from e-commerce storefronts and booking systems to membership and research platforms — with a strong focus on the frontend. Since starting my career in December 2020, I've shipped production applications for clients in India, Australia and New Zealand.",
    "For the past four years I've worked with a product-based client — the Australian company behind Entertainment, a membership platform used across Australia and New Zealand. Working day-to-day with their Australian product team, I own and maintain the Entertainment web application: building new features, improving performance and keeping the experience reliable for members, fundraisers and merchants.",
    "My day-to-day stack is Next.js, React and Redux, and I care deeply about responsive design that feels great on mobile, tablet and desktop. I enjoy integrating third-party platforms — from payment gateways like Razorpay to headless CMSs like Contentful — and I'm steadily growing toward full-stack development with Node.js and SQL.",
    "Lately I've been bringing AI into both how I build and what I build: using AI coding assistants to ship faster with fewer bugs, and integrating LLM APIs to add chat assistants, smart search and content generation to web products.",
  ],
  highlights: [
    { value: "Mobile-first", label: "Every screen designed for phone, tablet & desktop" },
    { value: "Clean code", label: "Typed, reusable components & predictable state" },
    { value: "Fast UIs", label: "Core Web Vitals, lazy loading & optimised assets" },
    { value: "AI-ready", label: "LLM features with streaming, polished interfaces" },
  ],
};

// Skill levels: adjust to reflect your own confidence with each tool.
export type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Learning";

export type SkillGroup = {
  key: "frontend" | "styling" | "state" | "quality" | "ai" | "backend" | "tools";
  title: string;
  blurb: string;
  items: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    title: "Core Frontend",
    blurb: "Frameworks and languages I build production interfaces with every day.",
    items: [
      { name: "Next.js (App & Pages Router)", level: "Expert" },
      { name: "React.js", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5 & Semantic Markup", level: "Expert" },
      { name: "CSS3 / Flexbox / Grid", level: "Expert" },
      { name: "SSR, SSG & ISR", level: "Advanced" },
      { name: "React Server Components", level: "Proficient" },
      { name: "Vue.js", level: "Proficient" },
    ],
  },
  {
    key: "styling",
    title: "UI, Styling & Motion",
    blurb: "Turning Figma designs into pixel-perfect, responsive and animated UIs.",
    items: [
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Responsive / Mobile-first Design", level: "Expert" },
      { name: "Bootstrap", level: "Expert" },
      { name: "Sass / SCSS", level: "Advanced" },
      { name: "Material UI", level: "Advanced" },
      { name: "shadcn/ui & Radix UI", level: "Proficient" },
      { name: "Styled Components", level: "Proficient" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Figma to Code", level: "Expert" },
    ],
  },
  {
    key: "state",
    title: "State & Data",
    blurb: "Predictable state and smooth data fetching for complex, multi-role apps.",
    items: [
      { name: "Redux & Redux Toolkit", level: "Expert" },
      { name: "React Context & Hooks", level: "Expert" },
      { name: "TanStack Query (React Query)", level: "Advanced" },
      { name: "Zustand", level: "Proficient" },
      { name: "Axios / Fetch API", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Proficient" },
      { name: "React Hook Form & Zod", level: "Advanced" },
    ],
  },
  {
    key: "quality",
    title: "Performance & Quality",
    blurb: "Fast, accessible, SEO-friendly sites that hold up in production.",
    items: [
      { name: "Core Web Vitals & Lighthouse", level: "Advanced" },
      { name: "Code Splitting & Lazy Loading", level: "Advanced" },
      { name: "Image & Font Optimisation", level: "Advanced" },
      { name: "Technical SEO & Metadata", level: "Advanced" },
      { name: "Accessibility (WCAG / ARIA)", level: "Proficient" },
      { name: "Cross-browser Compatibility", level: "Expert" },
      { name: "Jest & React Testing Library", level: "Proficient" },
      { name: "Playwright", level: "Learning" },
    ],
  },
  {
    key: "ai",
    title: "AI & LLM Development",
    blurb: "Building AI-powered features and using AI tools to ship faster.",
    items: [
      { name: "Claude & OpenAI APIs", level: "Advanced" },
      { name: "Vercel AI SDK", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "Streaming Chat UIs", level: "Advanced" },
      { name: "RAG & Embeddings", level: "Proficient" },
      { name: "Vector DBs (Pinecone / pgvector)", level: "Proficient" },
      { name: "Tool Calling & Structured Output", level: "Proficient" },
      { name: "LangChain.js", level: "Learning" },
    ],
  },
  {
    key: "backend",
    title: "Backend & Integrations",
    blurb: "APIs and third-party services that power the frontend.",
    items: [
      { name: "Node.js & Express", level: "Proficient" },
      { name: "SQL / MySQL", level: "Proficient" },
      { name: "Next.js API Routes & Server Actions", level: "Advanced" },
      { name: "Contentful (Headless CMS)", level: "Advanced" },
      { name: "Razorpay Payments", level: "Advanced" },
      { name: "OpenAlex & Lens APIs", level: "Advanced" },
      { name: "Mirrar Virtual Try-on", level: "Advanced" },
      { name: "Firebase", level: "Learning" },
    ],
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    blurb: "The tooling and process behind clean, collaborative delivery.",
    items: [
      { name: "Git, GitHub & Bitbucket", level: "Expert" },
      { name: "Jira & Agile / Scrum", level: "Expert" },
      { name: "Postman & Swagger", level: "Expert" },
      { name: "VS Code & Cursor", level: "Expert" },
      { name: "Vercel & Netlify", level: "Advanced" },
      { name: "npm / Yarn / pnpm", level: "Advanced" },
      { name: "Vite & Webpack", level: "Proficient" },
      { name: "ESLint & Prettier", level: "Advanced" },
    ],
  },
];

// Shown in the scrolling tech strip under the hero
export const techStrip = [
  "Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "TanStack Query",
  "Node.js", "Contentful", "Razorpay", "Vercel AI SDK", "Claude API", "OpenAI API", "Figma", "Git", "Vercel",
];

export const services = [
  {
    icon: "code",
    title: "Web App Development",
    description: "Production-grade Next.js & React apps with clean architecture, typed components and scalable state management.",
    points: ["SSR / SSG / ISR", "Reusable component systems", "Redux & React Query"],
  },
  {
    icon: "layout",
    title: "Pixel-perfect Responsive UI",
    description: "Figma designs converted into interfaces that look and feel right on every phone, tablet and desktop.",
    points: ["Mobile-first layouts", "Design-system friendly", "Cross-browser tested"],
  },
  {
    icon: "sparkles",
    title: "AI-powered Features",
    description: "Chat assistants, smart search and content generation built into your product with a polished, streaming UI.",
    points: ["Claude & OpenAI APIs", "RAG over your content", "Streaming responses"],
  },
  {
    icon: "gauge",
    title: "Performance & SEO",
    description: "Faster load times and better rankings through Core Web Vitals tuning and solid technical SEO.",
    points: ["Lighthouse audits", "Lazy loading & code splitting", "Metadata & OG tags"],
  },
  {
    icon: "plug",
    title: "API & Third-party Integrations",
    description: "Connecting your frontend to payments, CMSs, research data and AR plug-ins reliably.",
    points: ["Razorpay payments", "Contentful CMS", "REST & GraphQL"],
  },
  {
    icon: "wand",
    title: "Animations & Interactions",
    description: "Subtle motion and micro-interactions that make interfaces feel modern and alive — without hurting performance.",
    points: ["Framer Motion", "Scroll-based reveals", "Reduced-motion aware"],
  },
];

// AI features I can build into a product
export const aiCapabilities = [
  {
    icon: "message",
    title: "AI Chat Assistants",
    description: "Customer-support or product assistants with real-time streaming replies, chat history and markdown rendering.",
    stack: ["Vercel AI SDK", "Claude / OpenAI", "Streaming"],
  },
  {
    icon: "search",
    title: "Smart Search & RAG",
    description: "Ask-your-docs search that answers from your own content using embeddings and a vector database.",
    stack: ["Embeddings", "pgvector / Pinecone", "RAG"],
  },
  {
    icon: "pen",
    title: "Content Generation",
    description: "Auto-generate product descriptions, summaries, SEO meta tags and email drafts inside your admin panel.",
    stack: ["Prompt design", "Structured output", "CMS"],
  },
  {
    icon: "file",
    title: "Document & Data Extraction",
    description: "Turn PDFs, invoices and forms into clean structured data that drops straight into your app.",
    stack: ["Vision models", "JSON schema", "Zod"],
  },
  {
    icon: "bot",
    title: "AI Agents & Automation",
    description: "Assistants that call your APIs — search orders, book tables or update records — with tool calling.",
    stack: ["Tool calling", "Next.js Server Actions", "Node.js"],
  },
  {
    icon: "wand",
    title: "AI-enhanced UX",
    description: "Smart autocomplete, recommendations and natural-language filters that make interfaces feel effortless.",
    stack: ["React", "Debounced streaming", "Edge runtime"],
  },
];

// How I use AI tools in my own development workflow
export const aiWorkflow = {
  tools: ["Claude Code", "Cursor", "GitHub Copilot", "ChatGPT", "v0 by Vercel", "Figma AI"],
  uses: [
    "Scaffolding components and pages from designs in minutes",
    "Writing unit tests and catching edge cases early",
    "Refactoring legacy code and migrating to TypeScript",
    "Reviewing code, debugging and explaining unfamiliar APIs",
    "Generating documentation and realistic mock data",
  ],
};

export const workProcess = [
  { step: "01", title: "Discover", description: "Understand goals, users and requirements, then break the work into clear Jira tasks." },
  { step: "02", title: "Design to Code", description: "Translate Figma designs into a reusable component system with a mobile-first approach." },
  { step: "03", title: "Build & Integrate", description: "Develop features, wire up APIs, payments, CMS and AI — reviewed and version-controlled." },
  { step: "04", title: "Test & Ship", description: "Cross-device testing, performance tuning and smooth deployment, followed by iteration." },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Web Application Engineer",
    company: "Alian Software",
    location: "Anand, India",
    period: "Aug 2022 — Present",
    current: true,
    points: [
      "For the past 4 years, working with an Australian product company on Entertainment — their membership platform serving Australia and New Zealand.",
      "Own and handle the Entertainment web application end-to-end on the frontend: new features, enhancements, bug fixes and production releases.",
      "Collaborate daily with the Australian product, design and QA teams across time zones in an agile (Jira / Bitbucket) workflow.",
      "Building responsive, production-grade web applications with Next.js, React and Redux.",
      "Also delivered research and e-commerce platforms for clients in India, Australia and New Zealand.",
      "Integrated third-party services including Contentful CMS, OpenAlex and Lens APIs, and the Mirrar virtual try-on plug-in.",
      "Built reusable, responsive component libraries shared across projects to speed up delivery.",
      "Adopted AI-assisted development (code generation, reviews and tests) to ship features faster with fewer regressions.",
    ],
    tech: ["Next.js", "React", "Redux", "TypeScript", "Contentful", "Tailwind CSS", "Jira"],
  },
  {
    role: "Web Application Developer",
    company: "Codentic Software",
    location: "Anand, India",
    period: "Jul 2021 — Jul 2022",
    points: [
      "Developed a restaurant booking & POS web app and multiple e-commerce storefronts with Next.js and Redux.",
      "Integrated Razorpay payments and built role-based experiences for customers, delivery staff and admins.",
      "Collaborated closely with designers and backend teams in an agile workflow.",
    ],
    tech: ["Next.js", "React", "Redux", "Razorpay", "Bootstrap", "Git"],
  },
  {
    role: "Trainee Intern",
    company: "Codentic Software",
    location: "Anand, India",
    period: "Dec 2020 — Jun 2021",
    points: [
      "Built the admin panel for an E-Grocery platform.",
      "Developed REST APIs with Node.js and SQL and collaborated with the mobile app team on integration.",
    ],
    tech: ["Node.js", "SQL", "REST APIs", "Postman", "HTML/CSS"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Entertainment Membership",
    category: "Product Client · Australia & NZ",
    badge: "4+ years",
    description:
      "Long-term product work for an Australian company: a membership platform connecting members, fundraisers and merchants with dining, travel and lifestyle offers across Australia and New Zealand. I handle its web application alongside the Australian team.",
    highlights: ["Owning the web app for 4+ years", "Working directly with the Australian team", "Contentful headless CMS", "Fully responsive, multi-role UI"],
    tech: ["Next.js", "React", "Contentful", "Bitbucket", "Jira"],
  },
  {
    title: "SciLynk",
    category: "Research Academia",
    description:
      "A research paper discovery platform for science enthusiasts, powered by open scholarly data.",
    highlights: ["OpenAlex & Lens API integration", "Mobile, tablet & desktop ready"],
    tech: ["Next.js", "React", "REST APIs"],
  },
  {
    title: "Booking Management POS",
    category: "Restaurant SaaS",
    description:
      "Table booking system that lets restaurant staff arrange floor layouts, reserve tables and get notified before bookings.",
    highlights: ["Visual floor & table arrangement", "Booking reminders"],
    tech: ["Next.js", "React", "Redux"],
  },
  {
    title: "Almond House",
    category: "E-commerce",
    description:
      "E-commerce storefront listing products with pricing and manufacturing details for customers, delivery staff and administrators.",
    highlights: ["Razorpay payments", "Role-based flows"],
    tech: ["Next.js", "React", "Redux", "Razorpay"],
  },
  {
    title: "Samsara E-com",
    category: "Jewellery E-commerce",
    description:
      "Mobile-ready storefront with customer accounts and a virtual try-on experience for products on the go.",
    highlights: ["Mirrar virtual try-on", "Customer accounts"],
    tech: ["Next.js", "React", "Redux", "Mirrar"],
  },
  {
    title: "Samsara Catalog",
    category: "Sales Enablement",
    description:
      "Tablet-first catalog app for salespeople to showcase products and manage customer sessions in-store.",
    highlights: ["Tablet-optimised UI", "Session management"],
    tech: ["Next.js", "React", "Redux", "Mirrar"],
  },
];

export const education = [
  {
    degree: "M.Sc. IT (Post Graduation)",
    school: "ISTAR",
    location: "Anand",
    year: "2021",
    score: "8.24 CGPA",
  },
  {
    degree: "BCA (Under Graduation)",
    school: "SEMCOM",
    location: "Anand",
    year: "2019",
    score: "7.73 CGPA",
  },
  {
    degree: "Higher Secondary — Science",
    school: "Gyanyagna Vidyalaya",
    location: "Anand",
    year: "2015",
    score: "60%",
  },
];

export const achievements = [
  "4+ years handling the Entertainment web application for an Australian product company.",
  "Shipped 6+ production web applications for clients in India, Australia and New Zealand.",
  "Progressed from trainee intern to a full developer role within seven months.",
  "Graduated M.Sc. IT with 8.24 CGPA.",
  "Integrated payments, CMS, research APIs and AR try-on into live products.",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
