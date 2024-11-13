import { test } from "@playwright/test";

test("Open Projects in PMTool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  await page.locator("#Projects a").click();
});

test("fill and pressSequentially Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End");
  await page
    .locator("#username")
    .pressSequentially("Kde toto bude?", { delay: 1000 }); // ? Vypíše jednotlivé znaky postupně s 1 vteřinovým rozestupem
});


test("Select Tests", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("female"); // ? Vybere value "female" ze selectu "#gender"
  await page.locator("#gender").selectOption({ label: "Other" }); // ? Vybere hodnotu (option) dle textu "Other" ze selectu "#gender"
});

test("Checkbox, Radio Button Test", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html");
    await page.locator("#basic").check(); // Zakliknutí radio button
    await page.locator("#interests-travel").check();    // Zakliknutí checkboxu
    await page.locator("#interests-travel").uncheck(); // Odkliknutí checkboxu
});