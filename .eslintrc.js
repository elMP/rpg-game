module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "comma-dangle": 1,
    "no-unused-vars": "warn",
    "object-curly-newline": "warn",
    "no-restricted-syntax": "warn",
    "guard-for-in": "warn",
  },
};
