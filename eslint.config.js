import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import unicorn from 'eslint-plugin-unicorn'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
})

export default [
    {
        ignores: [
            'eslint.config.js',
            'next-env.d.ts',
            'node_modules/',
            '.next/',
            'out/',
            'build/',
            'storybook/',
            'coverage/',
            'public/locales/',
            'public/bootstrap*',
            'public/storybook/',
            'public/coverage/',
            'public/pdf.worker.min.mjs',
            'contentful.d.ts',
            'material-symbols.ts',
        ],
    },
    unicorn.configs.all,
    ...fixupConfigRules(
        compat.config({
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx'],
                },
                'import/resolver': {
                    typescript: {
                        alwaysTryTypes: true,
                        project: 'tsconfig.json',
                    },
                },
                jsdoc: {
                    mode: 'typescript',
                },
            },
            env: {
                browser: true,
            },
            extends: [
                'next/core-web-vitals',
                'prettier',
                'plugin:@typescript-eslint/recommended',
                'plugin:consistent-default-export-name/fixed',
            ],
            plugins: [
                'import',
                'simple-import-sort',
                'sort-exports',
                'unused-imports',
                'jsdoc',
                'prefer-arrow',
                '@typescript-eslint',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            reportUnusedDisableDirectives: true,
            rules: {
                semi: ['error', 'never'],
                'max-len': ['error', 120],
                curly: ['error', 'all'],
                'object-curly-newline': [
                    'error',
                    {
                        ObjectExpression: {
                            multiline: true,
                            minProperties: 1,
                            consistent: true,
                        },
                        ObjectPattern: {
                            consistent: true,
                        },
                        ImportDeclaration: {
                            consistent: true,
                        },
                        ExportDeclaration: {
                            consistent: true,
                        },
                    },
                ],
                'comma-dangle': [
                    'error',
                    {
                        arrays: 'always-multiline',
                        objects: 'always-multiline',
                        imports: 'always-multiline',
                        exports: 'always-multiline',
                        functions: 'never',
                    },
                ],
                'no-multiple-empty-lines': [
                    'error',
                    {
                        max: 1,
                        maxBOF: 0,
                        maxEOF: 1,
                    },
                ],
                'padding-line-between-statements': [
                    'error',
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: '*',
                    },
                    {
                        blankLine: 'any',
                        prev: ['import'],
                        next: ['import'],
                    },
                ],
                quotes: [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                        allowTemplateLiterals: false,
                    },
                ],
                'no-param-reassign': [
                    'error',
                    {
                        props: true,
                        ignorePropertyModificationsFor: ['accumulator', 'draft', 'ctx', 'config', 'child', 'editor'],
                    },
                ],
                'no-console': 'error',
                'no-alert': 'error',
                'capitalized-comments': [
                    'error',
                    'always',
                    {
                        ignoreConsecutiveComments: true,
                    },
                ],
                'no-restricted-syntax': 'off',
                camelcase: 'off',
                'no-underscore-dangle': [
                    'error',
                    {
                        allow: ['null_', 'function_'],
                    },
                ],

                'prefer-arrow/prefer-arrow-functions': [
                    'error',
                    {
                        disallowPrototype: true,
                        singleReturnOnly: false,
                        classPropertiesAllowed: false,
                    },
                ],

                'import/default': 'error',
                'import/group-exports': 'error',
                'import/no-cycle': 'off',
                'import/prefer-default-export': 'off',
                'import/no-anonymous-default-export': 'error',
                'import/no-unresolved': [
                    'error',
                    {
                        ignore: ['SVG$'],
                    },
                ],
                'import/no-namespace': ['error'],
                'import/extensions': [
                    'error',
                    'never',
                    {
                        json: 'always',
                    },
                ],
                'import/export': 'error',
                'import/exports-last': 'error',
                'import/no-deprecated': 'error',
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^react$'],
                            ['^\\u0000(?!\\.).+'],
                            ['^@?(?!src|pages)\\w.+'],
                            ['^pages/.+'],
                            ['^\\u0000src/.+'],
                            ['^src/.+'],
                        ],
                    },
                ],
                'sort-exports/sort-exports': [
                    'error',
                    {
                        sortDir: 'asc',
                        ignoreCase: false,
                        sortExportKindFirst: 'type',
                    },
                ],
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                name: 'react',
                                importNames: ['default'],
                                message: 'You do not need to import React.',
                            },
                            {
                                name: 'date-fns',
                                importNames: ['parse'],
                                message: 'This function is too heavy, use the custom date parsers.',
                            },
                            {
                                name: 'i18next',
                                importNames: ['t'],
                                message: "Did you mean to import from 'react-i18next'?",
                            },
                            {
                                name: 'next-i18next',
                                importNames: [
                                    'default',
                                    'useTranslation',
                                    'withTranslation',
                                    'Translation',
                                    'Trans',
                                    'i18n',
                                ],
                                message: "Did you mean to import from 'react-i18next'?",
                            },
                            {
                                name: '@mui/material',
                                importNames: ['Icon', 'Link'],
                                message:
                                    '[Icon] Use the custom Icon component. [Link] Use the Next.js Link component or the ComposedLink component.',
                            },
                            {
                                name: 'lodash',
                                importNames: ['last'],
                                message: '[last] Use array.length - 1.',
                            },
                            {
                                name: 'material-ui-popup-state',
                                message: "Did you mean to import from 'material-ui-popup-state/hooks'?",
                            },
                            {
                                name: 'material-ui-popup-state/core',
                                message: "Did you mean to import from 'material-ui-popup-state/hooks'?",
                            },
                            {
                                name: 'material-ui-popup-state/hooks',
                                importNames: ['bindToggle'],
                                message: "Did you mean to import 'bindTrigger'?",
                            },
                            {
                                name: 'ky-universal',
                                message: "This package is a polyfill for tests. Did you mean to import from 'ky'?",
                            },
                        ],
                        patterns: [
                            '@mui/*',
                            '@mui/*/*',
                            '@mui/*/*/*',
                            '!@mui/icons-material',
                            '!@mui/icons-material/*',
                            '!@mui/material',
                            '!@mui/material/test-utils/*',
                            '!@mui/material/use*',
                            '!@mui/utils',
                            '!@mui/lab',
                            '**/index',
                            '**/*.[a-z]*',
                            '!**/*.js',
                            '!**/*.mjs',
                            '!**/*.json',
                            '!**/*.png',
                            '!**/*.default',
                            '!pages/**/index',
                            '**/*.stories',
                            '**/*.test',
                            '../**',
                            './**',
                            'src/*/*/*/**',
                            '!src/translations/*/*/*',
                        ],
                    },
                ],
                'consistent-default-export-name/default-export-match-filename': ['error', null, '\\.\\w+$'],
                'consistent-default-export-name/default-import-match-filename': 'error',
                'unused-imports/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',

                'react/react-in-jsx-scope': 'off',
                'react/prop-types': 'off',
                'react/prefer-read-only-props': 'error',
                'react/function-component-definition': [
                    'error',
                    {
                        namedComponents: 'arrow-function',
                        unnamedComponents: 'arrow-function',
                    },
                ],
                'react/boolean-prop-naming': 'off',
                'react/jsx-filename-extension': [
                    'error',
                    {
                        extensions: ['.tsx'],
                    },
                ],
                'react/jsx-props-no-spreading': 'off',
                'react/jsx-key': 'error',
                'react/jsx-no-useless-fragment': 'error',
                'react/style-prop-object': 'error',
                'react/require-default-props': 'off',
                'react/jsx-no-leaked-render': [
                    'error',
                    {
                        validStrategies: ['ternary'],
                    },
                ],

                'jsdoc/check-alignment': 'error',
                'jsdoc/check-indentation': 'error',
                'jsdoc/check-syntax': 'error',
                'jsdoc/empty-tags': 'error',
                'jsdoc/match-description': 'error',
                'jsdoc/no-bad-blocks': 'error',
                'jsdoc/require-description': 'error',
                'jsdoc/require-description-complete-sentence': 'error',

                'unicorn/no-useless-undefined': 'off',
                'unicorn/no-null': 'off',
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            camelCase: true,
                            pascalCase: true,
                        },
                        ignore: ['ISO', '\\.d\\.ts$', '\\.config\\.'],
                    },
                ],
                'unicorn/prevent-abbreviations': [
                    'error',
                    {
                        replacements: {
                            prop: false,
                            props: false,
                            param: false,
                            params: false,
                            ref: false,
                            refs: false,
                            env: false,
                            docs: false,
                            args: {
                                params: true,
                                arguments: false,
                            },
                            arguments_: {
                                params: true,
                            },
                        },
                        allowList: {
                            i18NextConfig: true,
                            'lib.dom.d': true,
                        },
                    },
                ],
                'unicorn/no-keyword-prefix': 'off',
                'unicorn/no-unsafe-regex': 'off',
                'unicorn/prefer-at': 'off',

                'no-nested-ternary': 'off',
                'unicorn/no-nested-ternary': 'error',

                'react/display-name': 'off',
                '@next/next/no-img-element': 'off',
            },
            overrides: [
                {
                    files: ['*.ts', '*.tsx'],
                    rules: {
                        'no-use-before-define': 'off',
                        '@typescript-eslint/no-use-before-define': 'error',

                        'no-unused-vars': 'off',
                        '@typescript-eslint/no-unused-vars': [
                            'error',
                            {
                                argsIgnorePattern: '^_+$',
                                varsIgnorePattern: '^_+$',
                            },
                        ],

                        'no-shadow': 'off',
                        '@typescript-eslint/no-shadow': 'error',

                        'require-await': 'off',
                        '@typescript-eslint/require-await': 'error',

                        '@typescript-eslint/explicit-function-return-type': 'error',
                    },
                },
                {
                    files: ['*.js', '*.mjs'],
                    parser: 'espree',
                    rules: {
                        '@typescript-eslint/no-var-requires': 'off',
                        'unicorn/prefer-module': 'off',
                    },
                },
                {
                    files: ['*.mjs'],
                    rules: {
                        'import/extensions': [
                            'error',
                            'never',
                            {
                                js: 'always',
                                mjs: 'always',
                            },
                        ],
                        'consistent-default-export-name/default-import-match-filename': 'off',
                    },
                },
                {
                    files: ['*.config.ts', 'next.config.ts', 'next-i18next.config.ts'],
                    rules: {
                        'consistent-default-export-name/default-export-match-filename': 'off',
                        '@typescript-eslint/no-require-imports': 'off',
                        'unicorn/prefer-module': 'off',
                    },
                },
                {
                    files: ['*.config.js', '*.config.mjs'],
                    rules: {
                        'no-console': 'off',
                        'no-restricted-imports': 'off',
                        'jsdoc/require-jsdoc': 'off',
                        'consistent-default-export-name/default-export-match-filename': 'off',
                    },
                },
                {
                    files: ['src/app/**/*.ts', 'src/app/**/*.tsx'],
                    rules: {
                        'no-restricted-imports': 'off',
                    },
                },
                {
                    files: ['**/page.tsx', '**/layout.tsx'],
                    rules: {
                        'no-restricted-exports': 'off',
                        'consistent-default-export-name/default-export-match-filename': 'off',
                        'consistent-default-export-name/default-import-match-filename': 'off',
                    },
                },
                {
                    files: ['**/*.d.ts'],
                    rules: {
                        'no-restricted-imports': 'off',
                        'import/no-unresolved': 'off',
                        'import/extensions': 'off',
                        'unicorn/filename-case': 'off',
                    },
                },
                {
                    files: ['src/**/CVViewer.tsx', 'src/lib/api-data.ts'],
                    rules: {
                        'unicorn/filename-case': 'off',
                    },
                },
                {
                    files: ['src/**/CVViewer.tsx'],
                    rules: {
                        'no-restricted-imports': 'off',
                        'consistent-default-export-name/default-import-match-filename': 'off',
                        '@typescript-eslint/explicit-function-return-type': 'off',
                        '@typescript-eslint/no-explicit-any': 'off',
                        '@typescript-eslint/no-shadow': 'off',
                        'no-console': 'off',
                        'max-len': 'off',
                        'unicorn/prevent-abbreviations': 'off',
                    },
                },
                {
                    files: ['src/tests/**/*', '**/*.test.ts', '**/*.test.tsx'],
                    rules: {
                        'import/no-extraneous-dependencies': 'off',
                    },
                },
                {
                    files: ['**/*.stories.ts', '**/*.stories.tsx'],
                    rules: {
                        'consistent-default-export-name/default-export-match-filename': 'off',
                        'jsdoc/require-jsdoc': 'off',
                    },
                },
            ],
        })
    ),
]
