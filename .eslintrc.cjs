module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: false,
      },
    ],
  },
};
