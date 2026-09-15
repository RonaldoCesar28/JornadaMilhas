import test from "@playwright/test";
import PaginaLogin from "./page-objects/PaginaLogin";
import { isAwaitKeyword } from "typescript";

test.describe('Página de Login', () => {
    test('Deve fazer login com e-mail e senha válidos', async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.fazerLogin('ronaldo28@gmail.com', 'Senha12345');
        await paginaLogin.loginFeitoComSucesso();
    });
});