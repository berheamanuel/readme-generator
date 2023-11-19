// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Source: https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let badge = ''
  if(licenseType === 'GNU GPL v3') {
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GNU GPL v2') {
    badge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
  } else if (licenseType === 'GNU AGPL v3') {
    badge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`
  } else if (licenseType === 'GNU LGPL v3'){
    badge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`
  } else if (licenseType === 'GNU FDL v1.3'){
    badge = `![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)`
  }else if (licenseType === 'The MIT License'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Mozilla Public License 2.0'){
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else if (licenseType === 'Boost Software License 1.0'){
    badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (licenseType === 'Apache 2.0 License'){
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    license.license = "N/A";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
