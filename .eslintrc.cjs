module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // General
    'no-console': 'error', 
    'no-shadow': 'error',
    'no-unused-expressions': 'warn', 
    'semi': ['error', 'always'], 
    'quotes': ['error', 'single'], 
    'no-empty': 'warn', 
    'no-undef': 'error', 
    'no-constant-condition': 'warn', 
    'eqeqeq': 'error', 
    'strict': ['error', 'global'], 

    // Imports
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }], 
    'import/no-extraneous-dependencies': 'warn', 
    'import/no-named-as-default': 'warn', 
    'import/no-unresolved': 'error', 

    // Arrays and Objects
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': 'error', 

    // Functions
    'arrow-body-style': ['error', 'always'], 
    'arrow-parens': ['error', 'always'],
    'no-duplicate-imports': 'error', 
    'no-multiple-empty-lines': ['error', 'always'], 

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // JSX
    'react/jsx-closing-bracket-location': ['error', 'after-props'], 
    'react/jsx-curly-braces': 'error', 
    'react/jsx-indent': ['error', 2], 
    'react/jsx-no-duplicate-props': 'error', 
    'react/jsx-no-undef': ['error', { allowGlobals: true }], 
    'react/jsx-uses-react': 'error', 
    'react/jsx-uses-vars': 'error', 
    'react/prop-types': ['error', { skipUndeclared: true }], 
    'react/no-array-index-key': 'error', 
    'react/jsx-no-string-literal': ['error', { makeRepairs: true }], 
    'react/jsx-no-unsafe': 'warn', 
    // Potential Style Rules (adjust or remove based on your preferences)
    
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['error', { max: 1 }], 
    'max-len': ['warn', 100], 
    'no-unused-params': ['warn'],
    'prefer-const': 'warn'
  },
}
