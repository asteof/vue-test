module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    'max-len': ['error', { code: 128 }],
    'vuejs-accessibility/label-has-for': 0,
    'no-trailing-spaces': 0,
    'linebreak-style': 0,
    'no-useless-return': 0,
    'consistent-return': 0,
    'template-curly-spacing': 0,
  },
};
