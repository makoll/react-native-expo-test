const WARN = process.env.CI == 'true' ? 'error' : 'warn';

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  extends: ['plugin:prettier/recommended', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    google: true,
  },
  rules: {
    'no-useless-constructor': WARN, // 無意味なコンストラクタを非許容
    'max-len': [WARN, 120], // 1行の長さ120文字以上は警告
    'react/sort-comp': WARN,
    'import/order': [
      WARN,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
