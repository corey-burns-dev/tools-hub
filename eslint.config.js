import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  prettier,
  {
    // Global settings
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    // Node.js scripts
    files: ["**/*.mjs", "scripts/**/*"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      // Astro-specific rules
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", ".astro/**"],
  },
];
