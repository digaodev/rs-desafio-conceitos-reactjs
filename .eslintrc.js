const isWindows =
  process.platform === 'win32' || /^(msys|cygwin)$/.test(process.env.OSTYPE);

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint-config-prettier',
    'kentcdodds',
    'kentcdodds/jest',
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'babel/new-cap': 'off',
    'require-await': 'warn',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'babel/camelcase': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'import/no-unresolved': isWindows ? 'off' : 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: require.resolve('./test/jest.config.js'),
          },
        },
      },
    },
    {
      files: ['**/database/migrations/**'],
      rules: {
        'func-names': 'off',
      },
    },
  ],
};
