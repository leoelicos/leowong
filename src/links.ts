export type ExternalLinkProps = {
  readonly target: "_blank";
  readonly rel: "noreferrer";
};

export function linkProps(href: string): ExternalLinkProps | Record<string, never> {
  if (href.startsWith("https://") || href.startsWith("http://")) {
    return { target: "_blank", rel: "noreferrer" };
  }
  return {};
}
