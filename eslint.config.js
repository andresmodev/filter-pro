import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      react: { version: "detect" },
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/jsx-key": "error", // Obliga key en listas (muy importante)
      "react/jsx-no-target-blank": "warn", // Seguridad en <a target="_blank">
      "react/no-array-index-key": "warn", // Evita usar index como key
      "react/prop-types": "off", // No obliga PropTypes (estás en JS puro)
      "react/react-in-jsx-scope": "off", // No necesita import React
      "react/jsx-uses-react": "off", // Ídem
      "react-hooks/exhaustive-deps": "warn", // Avísame si faltan deps en useEffect
      "react-hooks/rules-of-hooks": "error", // Hooks solo en top level
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
