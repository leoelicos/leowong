export type Fact = {
  readonly term: string;
  readonly detail: string;
  readonly href?: string;
};

export type SiteLink = {
  readonly label: string;
  readonly href: string;
};

export const person = {
  name: "Leo Wong",
  role: "Full stack developer",
  place: "Sydney",
  email: "leoelicos@gmail.com",
  summary:
    "I build web applications and the services behind them. I maintain ingré, a shopping list for home cooks.",
} as const;

export const skills = {
  web: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
  inProgress: ["Swift", "Kotlin"],
} as const;

export const work: {
  readonly name: string;
  readonly summary: string;
  readonly detail: string;
  readonly facts: readonly Fact[];
  readonly links: readonly SiteLink[];
} = {
  name: "ingré",
  summary:
    "A shopping list for the home cook. You pick recipes, mark what you already have, then tick items off at the shop. The sections follow an Australian supermarket.",
  detail:
    "The recipes are part of the website, so opening one does not wait on a server. Hearts and the list stay on that device. Sign-in and card payments are the only things on the API.",
  facts: [
    { term: "Live", detail: "ingre.vercel.app", href: "https://ingre.vercel.app/" },
    { term: "Stack", detail: "React, TypeScript, Node.js, Express, MongoDB" },
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
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1Z6-Ec7gif7m8Zc9oGTFRcGc_SKSbtbzV/view?usp=sharing",
  },
] satisfies readonly SiteLink[];
