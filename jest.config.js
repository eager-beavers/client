// module.exports = {
//     moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
//
//     //(js|jsx) -> (ts|tsx)로 변경
//     transform: {
//         '^.+\\.(ts|tsx)?$': 'ts-jest'
//     },
//     testEnvironment: 'node',
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/$1'
//     },
//     testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'],
//     transformIgnorePatterns: ['<rootDir>/node_modules/']
// };

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    globals: {
        window: {}
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
};