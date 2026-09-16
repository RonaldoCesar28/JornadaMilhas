import { Locator, Page } from "@playwright/test";

export default class PaginaPrincipal {
    private readonly page: Page;
    private readonly campoDropdownOrigem: Locator

    constructor(page: Page) {
        this.page = page;
        this.campoDropdownOrigem = page
            .getByTestId('campo-dropdown-Origem')
            .getByLabel('Origem');
    }

    async visitar() {
        await this.page.goto('/');
    }
}