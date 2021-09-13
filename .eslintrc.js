module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        project: 'tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            }
        }
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'simple-import-sort'],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // make sure this is always the last configuration in the extends array (disables ESLint rules that might conflict with prettier and runs prettier as an ESLint rule)
    ],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        "import/no-unresolved": "error"
    }
};
