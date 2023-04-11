// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  /n
  /n
  ## Description /n
  /n
  ${description} /n
  /n
  #Table of Contents /n
  /n
  [Description](#description) /n
  [Installation](#installation) /n
  [Usage](#usage) /n
  [How to Contribute](#How to Contribute) /n
  /n
  #Installation /n
  /n
  ${installation} /n
  /n
  #Usage /n
  /n
  ${usage} /n
  /n
  #How to Contribute /n
  /n
  ${contributions} /n
  /n
  If you have any questions or issues about the application, don't hesitate to reach out to me at ${contactInfo}, or on GitHub at https://github.com/${gitName}


`;
}

module.exports = generateMarkdown;
