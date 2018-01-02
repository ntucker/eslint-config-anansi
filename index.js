module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    // changing airbnb defaults
    'global-require': 'off',
    'guard-for-in': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['warn', {
      allow: ['resolve', 'reject', 'done', 'cb'],
    }],
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used', ignoreRestSiblings: true }],
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'react/jsx-no-bind': ['error', {
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowBind: false,
    }],
    // opinions
    semi: ['error', 'never'],
    // additional rules
    'import/order': ['warn', {
      groups: [
        ['builtin', 'external'],
        'internal',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
    }],
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/newline-after-import': ['error', { 'count': 2 }],
  },
  plugins: [
    'react',
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
}

