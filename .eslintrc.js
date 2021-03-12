module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['tsconfig.json'],
            },
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es6: true
    },
    plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended' // make sure this is always the last configuration in the extends array (disables ESLint rules that might conflict with prettier and runs prettier as an ESLint rule)
    ],
};
