import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { cvHref, experience, person, skills, work } from "./content";

describe("App", () => {
  it("shows one heading, the role, email, and CV", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Leo Wong" })).toBeVisible();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByText("Full stack developer, Sydney")).toBeVisible();
    expect(screen.getByText(person.summary)).toBeVisible();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:leoelicos@gmail.com",
    );
    const heroCv = screen.getAllByRole("link", { name: "CV" })[0];
    expect(heroCv).toHaveAttribute("href", cvHref);
    expect(heroCv).toHaveClass("button");
    expect(screen.getByRole("link", { name: "ingré" })).toHaveAttribute(
      "href",
      "https://ingre.vercel.app/",
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

  it("lists skills with icons, experience, and the section links", () => {
    const { container } = render(<App />);

    for (const skill of [...skills.web, ...skills.quality, ...skills.inProgress]) {
      expect(screen.getByText(skill.name)).toBeVisible();
    }
    expect(container.querySelectorAll(".skill-icon").length).toBeGreaterThan(10);

    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 3, name: experience.org })).toBeVisible();
    expect(screen.getByText(experience.summary)).toBeVisible();
    for (const role of experience.roles) {
      expect(screen.getByText(role.title)).toBeVisible();
      expect(screen.getByText(role.dates)).toBeVisible();
    }
    expect(screen.getByText("Dec 2025 – present")).toBeVisible();

    const nav = screen.getByRole("navigation", { name: "Sections" });
    expect(within(nav).getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(within(nav).getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(within(nav).getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work",
    );

    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#content",
    );
    const scene = container.querySelector(".scene");
    expect(scene).toHaveAttribute("aria-hidden", "true");
    expect(scene?.querySelector("img[src='/bg/car.png']")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Stop motion" }));
    expect(screen.getByRole("button", { name: "Play motion" })).toBeVisible();
  });

  it("describes ingré with dated test numbers", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 3, name: work.name })).toBeVisible();
    expect(
      screen.getAllByText(
        "996 unit tests at 100% coverage and 443 passing Playwright browser tests, as of 8 November 2026",
        { exact: true },
      ).length,
    ).toBeGreaterThanOrEqual(1);
  });
});
