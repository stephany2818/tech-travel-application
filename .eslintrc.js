module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],

  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unused-expresions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassingn': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'react-/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'prettier/prettier': 'error',
    'react/jsx-no-constructed-context-values': 'off',
  },
};
