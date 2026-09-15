import { test, expect } from '@playwright/test';

test.describe('Pagina Inicial', () => {
    test('Deve visitar a pagina inicial', async ({ page }) => {
        await page.goto('/'); // método assincrono de ação/navegação
        await expect(page).toHaveTitle("Jornada Milhas"); // método assincrono de asserção/validação

        // const tituloPassagens = page.getByRole('heading', { name: 'Passagens' });
        // await expect(tituloPassagens).toBeVisible();

        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toBeVisible();

        const tituloPromocoes = page.getByTestId('titulo-promocoes');
        await expect(tituloPromocoes).toBeVisible();

        const tituloDepoimentos = page.getByTestId('titulo-depoimentos');
        await expect(tituloDepoimentos).toBeVisible();
    });
});