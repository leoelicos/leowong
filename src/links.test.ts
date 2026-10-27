import { describe, expect, it } from "vitest";
import { linkProps } from "./links";

describe("linkProps", () => {
  it("opens web addresses in a new tab", () => {
    expect(linkProps("https://ingre.vercel.app/")).toEqual({
      target: "_blank",
      rel: "noreferrer",
    });
  });

  it("leaves mail and page links in this tab", () => {
    expect(linkProps("mailto:leoelicos@gmail.com")).toEqual({});
    expect(linkProps("#contact")).toEqual({});
  });
});
