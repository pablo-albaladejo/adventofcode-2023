/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/helpers.ts',
    '/src/00/'
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/helpers.ts",
    "!src/00/**/*"
  ],
};