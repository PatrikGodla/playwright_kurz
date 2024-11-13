//actions_ests.spec.ts
import { test } from "@playwright/test";

test("E2E Registration", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html")
    await page.locator("#name").fill("Patrik Godla");
    await page.locator("#datepicker").fill("2000-01-25");
    await page.locator("#email").fill("playwright_jaro24");
    await page.locator("#password").fill("PlaywrightKurz");
    await page.locator("#confirm-password").fill("PlaywrightKurz");
    await page.locator("#premium").check ();
    await page.locator("#age").fill("20");
    await page.locator("#interests-sports").check();
    await page.locator("#interests-reading").check();
    await page.locator("#newsletter").check();
    await page.locator("#gender").selectOption("male");
    await page.locator("#adress").fill("Nedam");
    await page.locator('button[type="submit"]').click();
});