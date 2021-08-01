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
    "operator-linebreak": "warn",
    "no-unused-expressions": "warn",
    "no-plusplus": "warn",
    "camelcase": "warn",
    "import/prefer-default-export": "warn",
    "no-param-reassign": "warn",
    "no-bitwise": "warn",
    "implicit-arrow-linebreak": "warn",
    "no-return-assign": "warn",
    "function-paren-newline": "warn",
  },
};
