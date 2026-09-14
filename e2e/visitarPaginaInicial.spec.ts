import test, { expect } from "@playwright/test";

test.describe('Pagina Inicial', () => {
    test("Deve visitar a pagina inicial", async ({ page }) => {
        await page.goto('http://localhost:4200/'); // método assincrono de ação/navegação
        await expect(page).toHaveTitle("Jornada Milhas"); // método assincrono de asserção/validação
    });
});