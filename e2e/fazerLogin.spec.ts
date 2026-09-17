import { test } from './page-objects/PaginaLogin';

test.describe('Página de Login', () => {
    test('Deve fazer login com e-mail e senha válidos', async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin('ronaldo28@gmail.com', 'Senha12345');
        await paginaLogin.loginFeitoComSucesso();
    });

    test('Não deve fazer login com email inválido', async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin('ronaldo40@gmail.com', 'Senha12345');
        await paginaLogin.mensagemDeErro('Você não está autorizado a acessar este recurso');
    });
});