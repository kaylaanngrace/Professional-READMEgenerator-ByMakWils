// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='No license') {
    return `
![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
    `
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No license') {
    return `
[${license}](https://choosealicense.com/)
    `
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `
## License
The license this application is covered under is: 
${renderLicenseLink(license)}
    `
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table-of-Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contribution}


## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For questions please contact me at: 

[GitHub](https://github.com/${data.gitHubUser})

[Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
