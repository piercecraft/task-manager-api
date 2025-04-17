// src/__mocks__/logger.js
module.exports = {
  log: jest.fn(),
  error: jest.fn().mockImplementation(msg => {
    console.error('MOCK ERROR:', msg);
  })
}
