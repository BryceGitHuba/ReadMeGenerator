// generateMarkdown.js
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  };

  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': '[![License: MIT](https://opensource.org/licenses/MIT)]',
    'ISC': '[![License: ISC](https://opensource.org/licenses/ISC)]',
    'IBM': '[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)]'
  };

  return licenseLinks[license] || '';
}

function renderPicture(picture) {
  if (picture) {
    return `![Project Picture](${picture})\n\n`;
  }

  return '';
}

function renderLicenseSection(data) {
  const { license, picture } = data;

  let section = '';

  if (license || picture) {
    section += '\n## Additional Information\n\n';
  }

  if (license) {
    section += `### License\n${renderLicenseBadge(license)}\n\n`;
  }

  section += renderPicture(picture);

  return section;
}

function generateMarkdown(data) {
  const { license } = data;

  let markdown = `
  # ${data.title}
   ## ${renderLicenseBadge(license)}
  
   ## Description
     ${data.description}
  
   ## Table of Contents
     1. ${data.install}
     2. ${data.usage}
     3. ${renderLicenseLink(license)}
     4. ${data.contributors}
     5. ${data.tests}
     6. ${data.githubUsername}
     7. ${data.email}
  `;

  markdown += renderLicenseSection(data);

  return markdown;
}

module.exports = generateMarkdown;