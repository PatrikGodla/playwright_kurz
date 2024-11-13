import { test, expect } from "@playwright/test";

test("Novy Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("button[type='submit']").click();
  await expect.soft(page.locator("#username-error")).toBeVisible();
  await expect.soft(page.locator("#password-error")).toBeVisible();
  await expect(page.locator("#username-error")).toHaveText(
    "This field is required!"
  );
  await expect(page.locator("#password-error")).toHaveText(
    "This field is required!"
  );
});