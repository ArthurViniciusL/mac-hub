import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser'; // Importe o parser diretamente
import prettierConfig from 'eslint-config-prettier'; // Importe a configuração do Prettier

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig, // Adicione a configuração do Prettier aqui
  {
    files: ['**/*.tsx'], // Aplica as regras apenas a arquivos .tsx
    languageOptions: {
      parser: tsParser, // Use o parser importado diretamente
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
      
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      /* indent: ['error', 4], */
      quotes: ['error', 'double'],
      'react/jsx-indent-props': ['error', 4],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
    },
  },
];

export default eslintConfig;
