const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  testURL: 'http://locahost',
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  reporters: ['default', [ 'jest-junit', { outputDirectory: '<rootDir>/test/unit/'} ]],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
