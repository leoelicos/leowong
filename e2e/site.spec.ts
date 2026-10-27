import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("the page names Leo Wong and links the live work", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Leo Wong, full stack developer in Sydney");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Leo Wong");
  await expect(page.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:leoelicos@gmail.com",
  );
  await expect(page.getByRole("link", { name: "ingre.vercel.app" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Leo Wong" })).toBeVisible();
  await expect(page.locator(".scene")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator(".scene img[src='/bg/car.png']")).toBeAttached();
});

test("the page has no accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("a phone can reach contact without a menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("link", { name: "leoelicos@gmail.com" })).toBeVisible();
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("keeps the name and does not move the car", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Leo Wong");
    const car = page.locator(".scene img[src='/bg/car.png']");
    await expect(car).toBeAttached();
    await expect(car).toHaveCSS("transform", "none");
  });
});

