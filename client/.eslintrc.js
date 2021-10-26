const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', '.prettierrc'), 'utf8')
);

module.exports = {
  env: { browser: true, jest: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'eol-last': 'error',
    'prettier/prettier': ['error', prettierOptions],
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
