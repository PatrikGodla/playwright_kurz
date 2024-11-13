import { test, expect } from "@playwright/test";

test("Check input visibility and text of button save Test", async ({ page }) => {
  // ? Přihlášení do PMTool
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  await page.locator("#Projects a").click();
  await expect(page.locator(".table-scrollable table")).toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator("button[type='submit']")).toHaveText("Save");
});



/*
Vytvořte nový testovací soubor ve složce exercises: pmtool_add_project_tests.spec.ts
Vytvoř nový test:
Otevře PMTool a přihlásí se (využijte kroky z jiných testů)
Otevře menu Projects (počkejte na zobrazení tabulky, jinak testy mohou padat) - lokátor: ".table-scrollable table" (assert await toBeVisible)
Locator Projects "#Projects a"
Klikne na tlačítko add project (locator: '[test_id="Add Project"]') Zkontroluje v otevřeném boxu:
Viditelnost: input Name, lokátor: div[data-testid="Name"] input
Text: tlačítko save, lokátor: button[type='submit']
Spusť test

*/


test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toHaveAttribute test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/index.php?module=users/login");
  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    "Username"
  );
});

// test je přeskočen protože konči neušpešne
test.skip("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
});

test("Negative Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert")).not.toBeVisible();
});


