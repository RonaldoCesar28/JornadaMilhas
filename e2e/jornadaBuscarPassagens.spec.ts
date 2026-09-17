import test from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrincipal";

test.describe('Buscar Passagens', () => {
    test('Deve buscar passagem de somente ida', async ({ page }) => {
        const paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar();

        await paginaPrincipal.definirSomenteIda();
        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(1);
        await paginaPrincipal.definirPassageirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('minas gerais', 'rio de janeiro');

        const dataIda = new Date(); // armazenamos a data de ida em uma variável
        await paginaPrincipal.definirDataIda(dataIda); // usamos a variável
        await paginaPrincipal.buscarPassagens();

        await paginaPrincipal.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro', dataIda); // parâmetro adicionado
    });
});


