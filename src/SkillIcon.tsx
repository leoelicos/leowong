import {
  siExpress,
  siGithubactions,
  siGraphql,
  siJest,
  siKotlin,
  siMongodb,
  siNodedotjs,
  siReact,
  siStripe,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
} from "simple-icons";
import type { SkillIcon as SkillIconId } from "./content";

type SimpleIcon = {
  readonly path: string;
  readonly title: string;
};

const brandIcons: Partial<Record<SkillIconId, SimpleIcon>> = {
  react: siReact,
  typescript: siTypescript,
  nodedotjs: siNodedotjs,
  express: siExpress,
  graphql: siGraphql,
  mongodb: siMongodb,
  stripe: siStripe,
  vite: siVite,
  tailwindcss: siTailwindcss,
  jest: siJest,
  vitest: siVitest,
  githubactions: siGithubactions,
  vercel: siVercel,
  swift: siSwift,
  kotlin: siKotlin,
};

/** Custom mark: person + keyboard cue (not a trademarked a11y logo). */
function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="skill-icon" focusable="false">
      <circle cx="12" cy="4.5" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M7 9.5h10v2H14v7.2l-1.5 3.3h-1L10 18.7V11.5H7z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M5 21h14"
      />
    </svg>
  );
}

/** Custom mark: layered motion bars (Motion package has no Simple Icons entry). */
function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="skill-icon" focusable="false">
      <path
        fill="currentColor"
        d="M4 16.5 12 4.5l8 12H4zm3.1-2h9.8L12 8.4 7.1 14.5z"
      />
      <path fill="currentColor" d="M3 19.5h18v2H3z" opacity="0.55" />
    </svg>
  );
}

/** Custom mark: Playwright is not in Simple Icons. */
function PlaywrightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="skill-icon" focusable="false">
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        fill="currentColor"
        d="M8 10.2c0-1 .8-1.8 1.8-1.8S11.6 9.2 11.6 10.2 10.8 12 9.8 12 8 11.2 8 10.2zm4.4 0c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M9 14.2c.6.6 1.4.9 2.4.9s1.8-.3 2.4-.9"
      />
      <path fill="currentColor" d="M8 19.5h8v1.6H8z" />
    </svg>
  );
}

export function SkillIcon({ id }: { readonly id: SkillIconId }) {
  if (id === "accessibility") return <AccessibilityIcon />;
  if (id === "motion") return <MotionIcon />;
  if (id === "playwright") return <PlaywrightIcon />;

  const icon = brandIcons[id];
  if (icon === undefined) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="skill-icon"
      focusable="false">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
