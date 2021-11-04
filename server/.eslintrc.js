const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', '.prettierrc'), 'utf8')
);

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'eol-last': 'error',
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': ['error', 'as-needed'],
  },
  env: {
    jest: true,
  },
};
