import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // 1. Sempre comece estendendo as configurações globais de terceiros
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 2. Configuração global do seu projeto
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Adicionado para o Playwright reconhecer o ambiente Node
      }
    },
    rules: {
      'indent': 'off',
      'linebreak-style': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },

  // 3. Configuração específica para arquivos de teste (Playwright)
  {
    files: ['**/*.test.{js,mjs,cjs,ts,mts}', '**/*.spec.{js,mjs,cjs,ts,mts}', '**/tests/**/*.{js,mjs,cjs,ts,mts}'],
    languageOptions: {
      globals: {
        ...globals.jest // Ajuda o editor a entender asserções como 'expect' sem bugar
      }
    },
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Evita alertas chatos em testes
    },
  },
];
