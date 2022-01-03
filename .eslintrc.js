module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:promise/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // highlight debug print
        "no-console": 1,
        // it is useful when the return type was unknown
        // known issue https://github.com/typescript-eslint/typescript-eslint/issues/1277
        "consistent-return": 2,
        // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call(), we are ready to ES2022
        "prefer-object-has-own": 2,

        /* @typescript-eslint
           https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
        */
        // allow unused var like "_foo"
        "@typescript-eslint/no-unused-vars": [2, { varsIgnorePattern: "^_" }],
        // allow top-down declarative coding style
        "@typescript-eslint/no-use-before-define": 0,
        // empty function is not a bug
        "@typescript-eslint/no-empty-function": 0,
        // we don't use "any" too casually
        "@typescript-eslint/no-explicit-any": 0,

        /*
          disable some too strict rules with type checking
        */
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "@typescript-eslint/no-unsafe-argument": 0,

        /* plugin react
           https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        */
        // we don't need it
        "react/display-name": 0,
        // TypeScript follows this
        "react/prop-types": 0,

        /* plugin promise
           https://github.com/xjamundx/eslint-plugin-promise#rules
        */
        // allow Promise<void>
        "promise/always-return": 0,
        // allow omit then/catch
        "promise/catch-or-return": 0,
    },
};
