module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    setupFiles: ['./tests/unit/setup.ts'],
    testMatch: ['*/src//?(.)+(spec|test).[jt]s']
}