// this is generateMarkdown.test.js
const generateMarkdown = require('../utils/generateMarkdown');

// Test case for the generateMarkdown function
describe('generateMarkdown', () => {
  test('should generate markdown with correct input', () => {
    // Arrange
    const testData = {
      title: 'My Project',
      description: 'This is a test project.',
      one: 'Introduction',
      install: 'npm install',
      use: 'node index.js',
      license: 'MIT',
      contribute: 'Fork the repository and submit pull requests.',
      tests: 'npm test',
      username: 'testuser',
      email: 'test@example.com',
    };

    // Act
    const result = generateMarkdown(testData);

    // Assert
    expect(result).toContain('# My Project'); // Adjust this based on your expected output
    expect(result).toContain('[![License: MIT](https://opensource.org/licenses/MIT)]');
    expect(result).toContain('Fork the repository and submit pull requests.');
  });
});                                