import test from "@playwright/test";
import PaginaLogin from "./page-objects/PaginaLogin";

test.describe('Página de Login', () => {
    test('Deve fazer login com e-mail e senha válidos', async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.fazerLogin('ronaldo28@gmail.com', 'Senha12345');
        await paginaLogin.loginFeitoComSucesso();
    });

    test('Não deve fazer login com email inválido', async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.fazerLogin('ronaldo40@gmail.com', 'Senha12345');
        await paginaLogin.mensagemDeErro('Você não está autorizado a acessar este recurso');
    });
});