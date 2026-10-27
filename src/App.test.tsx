import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("shows one heading, the role, and the email", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Leo Wong" })).toBeVisible();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByText("Full stack developer, Sydney")).toBeVisible();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:leoelicos@gmail.com",
    );
  });

  it("links the live site and says the phone apps are not in the stores", () => {
    render(<App />);

    const site = screen.getByRole("link", { name: "ingre.vercel.app" });
    expect(site).toHaveAttribute("href", "https://ingre.vercel.app/");
    expect(site).toHaveAttribute("target", "_blank");
    expect(
      screen.getByText("iPhone and Android are not in the stores yet"),
    ).toBeVisible();
  });

  it("lists the web skills and the section links", () => {
    const { container } = render(<App />);

    for (const skill of ["React", "TypeScript", "Node.js", "Express", "MongoDB"]) {
      expect(screen.getByText(skill)).toBeVisible();
    }
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#content",
    );
    expect(screen.getByRole("navigation", { name: "Sections" })).toBeVisible();
    const scene = container.querySelector(".scene");
    expect(scene).toHaveAttribute("aria-hidden", "true");
    expect(scene?.querySelector("img[src='/bg/car.png']")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Stop motion" }));
    expect(screen.getByRole("button", { name: "Play motion" })).toBeVisible();
  });
});
