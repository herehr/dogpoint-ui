import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // Falls du eine ältere Node-Version hast, entferne diese Zeile
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@next/next/no-img-element': 'off', // Falls du <img> statt <Image> nutzen willst
    },
  }),
]

export default eslintConfig
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
