module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest", "prettier", "react", "react-hooks"],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", "jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // eslint official
    "newline-before-return": "error",
    "no-underscore-dangle": "off",
    "no-console": "warn",
    "require-yield": "error",

    // @typescript-eslint
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",

    // react
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["jsx", "tsx"],
      },
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",

    // react hooks
    "react-hooks/rules-of-hooks": "error",

    // import
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",

    // prettier
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        semi: false,
        singleQuote: false,
        trailingComma: "all",
        useTabs: false,
      },
    ],
  },
}
