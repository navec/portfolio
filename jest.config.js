const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '@/templates/(.*)$': '<rootDir>/components/templates/$1',
    '@/organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '@/molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '@/atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '@/hoc/(.*)$': '<rootDir>/components/HOC/$1',
    '@/theme/(.*)$': '<rootDir>/components/theme/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
