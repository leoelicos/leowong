export type Fact = {
  readonly term: string;
  readonly detail: string;
  readonly href?: string;
};

export type SiteLink = {
  readonly label: string;
  readonly href: string;
};

export type SkillIcon =
  | "react"
  | "typescript"
  | "nodedotjs"
  | "express"
  | "graphql"
  | "mongodb"
  | "stripe"
  | "vite"
  | "tailwindcss"
  | "jest"
  | "vitest"
  | "githubactions"
  | "vercel"
  | "swift"
  | "kotlin"
  | "playwright"
  | "accessibility"
  | "motion";

export type Skill = {
  readonly name: string;
  readonly icon: SkillIcon;
};

export type ExperienceRole = {
  readonly title: string;
  readonly dates: string;
};

export const person = {
  name: "Leo Wong",
  role: "Full stack developer",
  place: "Sydney",
  email: "leoelicos@gmail.com",
  summary:
    "I build web apps end to end, from the interface to the server. I maintain ingré, a recipe-based shopping list for Australian home cooks.",
} as const;

export const about = {
  paragraphs: [
    "I'm a full stack developer in Sydney. I started ingré as a coding bootcamp project, then joined an Australian financial corporation in July 2023, where I still work. There I build React front ends, including migrating apps onto a new in-house React platform. In October 2026 I picked ingré back up and rebuilt it with Vite, strict TypeScript and full test coverage, and I've started native iPhone and Android apps. I care about plain interfaces, keyboard and screen-reader use, and keeping things fast.",
  ],
} as const;

export const experience = {
  org: "Australian financial corporation",
  dates: "July 2023 – present",
  summary:
    "Across these roles I've built React front ends and migrated applications onto a new in-house React platform.",
  roles: [
    { title: "Analyst Engineer", dates: "Dec 2025 – present" },
    { title: "Associate", dates: "May 2024 – Dec 2025" },
    { title: "Intern", dates: "Jul 2023 – May 2024" },
  ] satisfies readonly ExperienceRole[],
} as const;

export const cvHref =
  "https://drive.google.com/file/d/1Z6-Ec7gif7m8Zc9oGTFRcGc_SKSbtbzV/view?usp=sharing";

export const skills = {
  web: [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express", icon: "express" },
    { name: "GraphQL", icon: "graphql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Stripe", icon: "stripe" },
    { name: "Vite", icon: "vite" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ] satisfies readonly Skill[],
  quality: [
    { name: "Jest", icon: "jest" },
    { name: "Vitest", icon: "vitest" },
    { name: "Playwright", icon: "playwright" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "Vercel", icon: "vercel" },
    { name: "Accessibility", icon: "accessibility" },
    { name: "Motion", icon: "motion" },
  ] satisfies readonly Skill[],
  inProgress: [
    { name: "Swift", icon: "swift" },
    { name: "Kotlin", icon: "kotlin" },
  ] satisfies readonly Skill[],
} as const;

export const work: {
  readonly name: string;
  readonly summary: string;
  readonly detail: string;
  readonly bullets: readonly string[];
  readonly facts: readonly Fact[];
  readonly links: readonly SiteLink[];
} = {
  name: "ingré",
  summary:
    "A shopping list for the home cook. You pick recipes, mark what you already have, then tick items off at the shop. The sections follow an Australian supermarket.",
  detail:
    "I am the sole builder. The recipes ship with the website, so opening one does not wait on a server. The list stays on the device. Sign-in (JWT) and Stripe card payments run on Express with Apollo GraphQL and MongoDB; the site is on Vercel. Native Swift and Kotlin apps are in progress and are not in the stores yet.",
  bullets: [
    "Bundled catalogue of 30 recipes and 111 ingredients for instant Explore",
    "Device-local list state; JWT sign-in and Stripe on Express + Apollo GraphQL + MongoDB",
    "996 unit tests at 100% coverage and 443 passing Playwright browser tests, as of 8 November 2026",
    "Native Swift and Kotlin apps in progress; not in the stores",
  ],
  facts: [
    { term: "Live", detail: "ingre.vercel.app", href: "https://ingre.vercel.app/" },
    {
      term: "Stack",
      detail: "React, TypeScript, Vite, Node.js, Express, GraphQL, MongoDB, Stripe",
    },
    {
      term: "Tests",
      detail:
        "996 unit tests at 100% coverage and 443 passing Playwright browser tests, as of 8 November 2026",
    },
    { term: "Phone", detail: "iPhone and Android are not in the stores yet" },
  ] satisfies readonly Fact[],
  links: [
    { label: "Website", href: "https://ingre.vercel.app/" },
    { label: "Code", href: "https://github.com/leoelicos/ingre" },
  ] satisfies readonly SiteLink[],
};

export const contact = [
  { label: "leoelicos@gmail.com", href: "mailto:leoelicos@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leoelicos" },
  { label: "GitHub", href: "https://github.com/leoelicos" },
  { label: "CV", href: cvHref },
] satisfies readonly SiteLink[];
