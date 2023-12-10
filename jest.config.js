/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/common/',
    '/src/00/'
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/common/",
    "!src/00/**/*"
  ],
};