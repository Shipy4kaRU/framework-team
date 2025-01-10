import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigAirbnb from 'eslint-config-airbnb-typescript';
import prettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react'; // Подключаем плагин React

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.app.json',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      react: reactPlugin, // Добавляем плагин React (чтобы eslint заставлял типизировать react компоненты и хуки)
    },
    rules: {
      // Типичные правила TypeScript
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'error', // Для явного указания типов
      '@typescript-eslint/explicit-function-return-type': 'error', // Проверка возврата типов
      '@typescript-eslint/consistent-type-assertions': 'error', // Строгая проверка типов

      // Типичные правила для React Hooks
      'react-hooks/rules-of-hooks': 'error', // проверяет чтобы хук вызывался только в функциональных компонентах или других хуках
      'react-hooks/exhaustive-deps': 'warn', // проверка зависимостей для useEffect

      // Правило для React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Prettier правила
      'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5', endOfLine: 'auto' }],

      // Правила из конфигурации Airbnb для TypeScript
      ...eslintConfigAirbnb.rules,

      // Правила для React (например, jsx-filename-extension)
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    },
  },
];
