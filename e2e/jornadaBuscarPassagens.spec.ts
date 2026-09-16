import test from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrincipal";
import { isAwaitKeyword } from "typescript";

test.describe('Buscar Passagens', () => {
    test('Deve buscar passagem de somente ida', async ({ page }) => {
        const paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar();
    })
})


