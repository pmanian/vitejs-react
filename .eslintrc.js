module.exports = {
    env: {
        browser: true,
        jest: true
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src']
            }
        }
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] }
        ],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true
            }
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
            }
        ],
        'no-console': 'off'
    }
};
