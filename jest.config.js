// eslint-disable-next-line import/no-extraneous-dependencies
const { defaults } = require('jest-config');

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/Config/__mocks__/fileTransform.js',
    '\\.(css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/Common/*.{ts,tsx,js,jsx}',
    '!src/Config/*.{ts,tsx,js,jsx}',
  ],
};

module.exports = config;
