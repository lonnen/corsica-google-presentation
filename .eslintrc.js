module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    radix: 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
