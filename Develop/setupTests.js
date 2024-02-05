//this is setupTests.js
jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValue({})
  }));