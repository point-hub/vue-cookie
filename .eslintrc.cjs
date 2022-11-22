/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 120, semi: false }],
    'tailwindcss/no-custom-classname': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
