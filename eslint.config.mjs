import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // 🔥 ESLint-Regel für `selectedDog` deaktivieren
      '@next/next/no-img-element': 'off',
    },
  }),
]

export default eslintConfig

