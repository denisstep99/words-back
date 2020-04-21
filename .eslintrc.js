module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": ["error", {"prefixWithI": "always"}],
    "@typescript-eslint/consistent-type-assertions": ["error", {"assertionStyle": "angle-bracket"}]
  }
};
