// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = !'No license') {
    return `
      ![badge](https://img.shields.io/badge/license-${license}-blue)
    `
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = !'No license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = !'No license') {
    return `
      ## [Liscense](#table-of-contents)
      The license this application is covered under is: 

      ${renderLicenseBadge(badge)}
      ${renderLicenseLink(license)}
    `
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
