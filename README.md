# Jornada Milhas

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUIDO&color=GREEN)

## 📝 Resumo do Projeto

O Jornada Milhas é uma plataforma voltada à busca de passagens aéreas, permitindo que o usuário pesquise opções de ida e volta, filtre resultados por preço, conexões e companhias aéreas, consulte diferentes alternativas de viagens de acordo com suas necessidades, foi implementado testes E2E (*End-to-end*), com a ferramenta de automação playwright, a fim de aumentar a confiabilidade e qualidade do sistema.

<img src="screenshot.png" alt="Imagem do Jornada Milhas" width="100%">

## 🚀 Tecnologias Utilizadas

* `Node.js` v20.20.0
* `eslint` v8.57.1
* `Angular` v16.0.0
* `Playwright` v1.63.0

## 📂 Estrutura de Pastas e Arquivos do Projeto

```
├── .angular
├── e2e
│   ├── page-objects
│   │   └── PaginaLogin.ts
│   │   └── PaginaPrincipal.ts
│   ├── example.spec.ts
│   ├── fazerLogin.spec.ts 
│   ├── jornadaBuscarPassagens.spec.ts
│   ├── visitarPaginaInicial.spec.ts
├── jornada-milhas-api
├── node_modules
├── playwright-report
├── src
├── test-results
├── .editorconfig
├── .gitignore
├── angular.json
├── eslint.config.mts
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
├── screenshot.png
├── thumbnail.png
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
```

## 🛠️ Abrir e rodar o projeto Front end e Back end

Para abrir e rodar o projeto front-end, execute `npm start` e para abrir e rodar o back end da aplicação, entre na pasta `jornada-milhas-api` e execute `npm start` para iniciar o projeto.

Depois, acesse <a href="http://localhost:4200/">http://localhost:4200/</a> no seu navegador.

## 🛠️ Abrir e testar o Playwright

Para abrir e testar os arquivos no playwright pelo terminal, execute o comando `npm run e2e` e para abrir e testar os arquivos na interface do playwright, execute o comando `npm run e2e-ui` para iniciar o teste.

## Desenvolvedor
<img src="https://github.com/user-attachments/assets/c7a6e9ed-d509-4f2a-b857-c832d6973a54" width="120px"/><br>Ronaldo Cesar