const shared = {
  "no-shadow": ["error", { allow: ["crypto"] }],
  "require-await": "off",
  "import/no-default-export": "warn",
  "react/display-name": "off",
  "prefer-named-capture-group": "off",
};

const base = { ...shared };

const typescript = {
  "react/prop-types": "off",
  "@typescript-eslint/ban-ts-ignore": "off",
  "@typescript-eslint/ban-ts-comment": "warn",
  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/return-await": "off",
  "@typescript-eslint/prefer-readonly-parameter-types": "off",
  "@typescript-eslint/no-base-to-string": "off",
  "@typescript-eslint/promise-function-async": "off",
  "@typescript-eslint/no-unnecessary-condition": ["warn", { ignoreRhs: true }],
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    { accessibility: "no-public", overrides: { properties: "explicit" } },
  ],
  ...shared,
};

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  // The project field is required in order for some TS-syntax-specific rules to function at all
  // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
  parserOptions: { project: "./tsconfig.json" },
  env: { node: true, browser: true },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "@strv/react",
  ],
  plugins: ["import"],
  settings: { react: { version: "detect" } },
  rules: base,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "@strv/typescript",
      ],
      plugins: ["@typescript-eslint"],
      rules: typescript,
    },
    {
      files: ["*.page.*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["*.test.*"],
      rules: {
        "@typescript-eslint/await-thenable": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
