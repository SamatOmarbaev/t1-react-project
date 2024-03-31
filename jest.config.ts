export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        '^.+\\.module\\.(css|sass|scss)$': 'vitest/css-modules-transform'
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
}