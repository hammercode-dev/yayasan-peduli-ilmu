import nextJest from 'next/jest';
import type { Config } from '@jest/types';

// Create a function to generate the config with Next.js support
const createJestConfig = nextJest({ dir: './' });

const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Fix for ESM packages like next-intl
  transformIgnorePatterns: ['node_modules/(?!next-intl)/'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

// Export the async config created by next/jest
export default createJestConfig(customJestConfig);
