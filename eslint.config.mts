import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1. Configurações recomendadas base do JavaScript
  js.configs.recommended,

  // 2. Desativa a checagem de tipos em tempo real para os testes (evita o travamento/tela vermelha)
  ...tseslint.configs.recommended,

  // 3. Regras personalizadas aplicadas a TODOS os arquivos do projeto
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'indent': 'off',
      'linebreak-style': 'off',
      'quotes': ['error', 'single'], // Vai apontar erro se usar aspas duplas ""
      'semi': ['error', 'always'],   // Vai apontar erro se esquecer o ponto e vírgula ;
    },
  },

  // 4. Configuração isolada para arquivos do Playwright (impede conflitos)
  {
    files: ['**/*.test.{js,mjs,cjs,ts,mts}', '**/*.spec.{js,mjs,cjs,ts,mts}', '**/tests/**/*.{js,mjs,cjs,ts,mts}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
      // Garante que o TypeScript não tente validar tipos profundos do Playwright em tempo real
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/await-thenable': 'off',
    },
  },
);
