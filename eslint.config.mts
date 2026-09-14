import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default ([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.browser },
    // 1. Suas regras gerais entram aqui:
    rules: {
      'indent': 'off',
      'linebreak-style': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },

  // Mantém as recomendações do TypeScript
  ...tseslint.configs.recommended,

  // 2. Configuração específica para arquivos de teste:
  {
    files: ['**/*.test.{js,mjs,cjs,ts}', '**/*.spec.{js,mjs,cjs,ts}', '**/tests/**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-undef': 'off',
    },
  },
]);
