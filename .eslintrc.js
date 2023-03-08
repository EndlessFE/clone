module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-prototype-builtins": 0,
    "prettier/prettier": "error",
  },
};
