module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  ignorePatterns: ["**/*.d.ts", "**/vendor/*.js"],
  rules: {
    "import/no-dynamic-require": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "no-shadow": "off",
    "react/prop-types": 0,
    "no-empty-pattern": 0,
    "no-alert": 0,
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
  settings: {
    'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
  }
};