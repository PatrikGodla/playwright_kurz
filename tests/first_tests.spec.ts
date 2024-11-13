import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  // Test code
  // Aplikace: https://tredgate.com/pmtool/
  await page.goto("https://tredgate.com/pmtool/"); // Otevře stránku
  await page.locator("#username").fill("Test"); // Vyplní slovo Test do prvku #username
});