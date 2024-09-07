module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/index.ts',
    '!src/app/**', // should be tested in e2e
    '!src/styles/**',
    '!src/types/**',
    '!src/utils/**',
    '!src/mappers/**',
    '!src/lib/**',
    '!src/graphql/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/mock.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
