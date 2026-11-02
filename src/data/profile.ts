// Single source of truth for all portfolio content.
// Update this file to change what appears on the site.

export const profile = {
  name: "Pratik Thakkar",
  initials: "PT",
  role: "Frontend Developer",
  tagline: "I build fast, responsive, pixel-perfect web apps with Next.js & React.",
  location: "Anand, Gujarat, India",
  email: "thapratik00@gmail.com",
  phone: "+91 94273 52211",
  resume: "/Pratik-Thakkar-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/pratik-thakkar-203004185/",
  github: "https://github.com/pratik00git",
  careerStart: new Date(2020, 11, 1), // Dec 2020
  about: [
    "I'm an innovative and meticulous software developer focused on crafting modern, high-quality user interfaces. Since starting my career in December 2020, I've shipped production web applications across e-commerce, hospitality, research and membership platforms.",
    "My day-to-day stack is Next.js, React and Redux, and I care deeply about responsive design that feels great on mobile, tablet and desktop. I enjoy integrating third-party platforms — from payment gateways like Razorpay to headless CMSs like Contentful — and I'm steadily growing toward full-stack development with Node.js and SQL.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Vue.js", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "SQL", "REST APIs", "Contentful CMS", "Razorpay", "OpenAlex API", "Lens API"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "Bitbucket", "Jira", "Postman", "Swagger", "VS Code", "WAMP / XAMPP"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Alian Software",
    location: "Anand, India",
    period: "Aug 2022 — Present",
    current: true,
    points: [
      "Building responsive, production-grade web applications with Next.js, React and Redux.",
      "Delivered membership, research and e-commerce platforms for clients in India, Australia and New Zealand.",
      "Integrated third-party services including Contentful CMS, OpenAlex and Lens APIs, and the Mirrar virtual try-on plug-in.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Codentic Software",
    location: "Anand, India",
    period: "Jul 2021 — Jul 2022",
    points: [
      "Developed a restaurant booking & POS web app and multiple e-commerce storefronts with Next.js and Redux.",
      "Integrated Razorpay payments and built role-based experiences for customers, delivery staff and admins.",
      "Collaborated closely with designers and backend teams in an agile workflow.",
    ],
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
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Entertainment Membership",
    category: "Membership Platform · AUS & NZ",
    description:
      "A community membership program bringing together members, fundraisers and merchants across Australia and New Zealand.",
    highlights: ["Contentful headless CMS", "Fully responsive UI", "Multi-role experience"],
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
  "Shipped 6+ production web applications for clients in India, Australia and New Zealand.",
  "Progressed from trainee intern to frontend developer within seven months.",
  "Graduated M.Sc. IT with 8.24 CGPA.",
  "Integrated payments, CMS, research APIs and AR try-on into live products.",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
