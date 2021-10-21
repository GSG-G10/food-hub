module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
