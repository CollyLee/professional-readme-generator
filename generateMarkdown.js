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

  ## Description /n
  
  ${data.description} 
  
  #Table of Contents 
  
  [Description](#description) 
  [Installation](#installation) 
  [Usage](#usage) 
  [How to Contribute](#How to Contribute) 
  
  #Installation 
  
  ${data.installation} 
  
  #Usage 

  ${data.usage} 
  
  #How to Contribute 
  
  ${data.contributions} 
  
  If you have any questions or issues about the application, don't hesitate to reach out to me at ${data.contactInfo}, or on GitHub at https://github.com/${data.gitName}

`;
}

module.exports = generateMarkdown;
