module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ["json"],
  rules: {
    "comma-dangle": ["warn", "never"],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "no-unused-vars": [2, { "vars": "local", "args": "none" }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  },
};
