//ar path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js'
  }
}