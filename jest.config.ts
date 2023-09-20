module.exports = {
  roots: ['<rootDir>/test'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(test).+(ts|tsx)'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',

    '^.+\\.(js|jsx)$': 'jest-esm-transformer',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  transformIgnorePatterns: [`/node_modules/*`],

  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: { '^uuid$': 'uuid' },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
