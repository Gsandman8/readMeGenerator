const inquirer = require("inquirer");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  const badges = {
    "Apache 2.0 License" : "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "The Artistic License 2.0": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "Boost Software License 1.0":"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 2-clause 'Simplified' license":"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "BSD 3-clause 'New' or 'Revised license":"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Creative Commons Zero v1.0 Universal":"[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "Creative Commons Attribution 4.0": "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    "Creative Commons Attribution ShareAlike 4.0": "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "Eclipse Public License 2.0": "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
    "GNU Affero General Public License v3.0":"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "GNU General Public License v2.0":"[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    "GNU General Public License v3.0":"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GNU Lesser General Public License v3.0":"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "IBM Public License v1.0":"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "ISC":"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Perl License":"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "SIL Open Font License 1.1":"[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "The Unlicense":"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "zLib License":"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    "Do What The F*ck You Want To Public License":"[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  };
  if(license==="No License"){
    return badge;
  }
  badge = badges[license];
  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  let link = "";
const links = {
  "Apache 2.0 License" : "https://opensource.org/licenses/Apache-2.0",
  "The Artistic License 2.0": "https://opensource.org/licenses/Artistic-2.0",
  "Boost Software License 1.0":"https://www.boost.org/LICENSE_1_0.txt",
  "BSD 2-clause 'Simplified' license":"https://opensource.org/licenses/BSD-2-Clause",
  "BSD 3-clause 'New' or 'Revised license":"https://opensource.org/licenses/BSD-3-Clause",
  "Creative Commons Zero v1.0 Universal":"http://creativecommons.org/publicdomain/zero/1.0/",
  "Creative Commons Attribution 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "Creative Commons Attribution ShareAlike 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
  "Eclipse Public License 1.0": "https://opensource.org/licenses/EPL-1.0",
  "Eclipse Public License 2.0": "https://opensource.org/licenses/EPL-2.0",
  "GNU Affero General Public License v3.0":"https://www.gnu.org/licenses/agpl-3.0",
  "GNU General Public License v2.0":"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  "GNU General Public License v3.0":"https://www.gnu.org/licenses/gpl-3.0",
  "GNU Lesser General Public License v3.0":"https://www.gnu.org/licenses/lgpl-3.0",
  "IBM Public License v1.0":"Licensehttps://opensource.org/licenses/IPL-1.0",
  "ISC":"https://opensource.org/licenses/ISC",
  "MIT":"https://opensource.org/licenses/MIT",
  "Mozilla Public License 2.0":"https://opensource.org/licenses/MPL-2.0",
  "Perl License":"https://opensource.org/licenses/Artistic-2.0",
  "SIL Open Font License 1.1":"https://opensource.org/licenses/OFL-1.1",
  "The Unlicense":"(http://unlicense.org/",
  "zLib License":"https://opensource.org/licenses/Zlib",
  "Do What The F*ck You Want To Public License":"http://www.wtfpl.net/about/"
};
if(license==="No License"){
  return link;
}
link = links[license];
return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  let licenseSection;
  if(license==="No License"){
    licenseSection="";
    return licenseSection;
  }
  let link = renderLicenseLink(license);
  licenseSection = 
  `## License
   Licensed by ${license}.
   ${link}`;
   return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let descriptionHeader = "";
  let descriptionLink = "";
  let installationHeader = "";
  let installationLink = "";
  let usageHeader = "";
  let usageLink = "";
  let contributionHeader = "";
  let contributionLink = "";
  let testHeader = "";
  let testLink = "";
  let licenseLink = "";
  if(data.description!=""){
    descriptionHeader = `## Description`;
    descriptionLink = `[Description](#description)`
  }
  if(data.installation!=""){
    installationHeader = "## Installation";
    installationLink = "[Installation](#installation)"
  }
  if(data.usage!=""){
    usageHeader = "## Usage";
    usageLink = "[Usage](#usage)"
  }
  if(data.contribution!=""){
    contributionHeader = "## Contribution";
    contributionLink = "[Contribution](#contribution)"
  }
  if(data.test!=""){
    testHeader = "## Tests"
    testLink = "[Tests](#tests)"
  }
  if(data.license!="No License"){
    licenseLink = "[License](#license)"
  }
  return [
  descriptionLink, 
  installationLink,
  usageLink,
  contributionLink,
  testLink,
  licenseLink,
  descriptionHeader,
  installationHeader,
  usageHeader,
  contributionHeader,
  testHeader];
  

}

module.exports = {generateMarkdown, 
  renderLicenseBadge, 
  renderLicenseLink, 
  renderLicenseSection};
