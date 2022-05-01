//moved over here for organization(modular)
//i really wanted to use the ```bash``` to format the section that gets installed and i did, it looks really great.
function generateMarkdown(userAnswers) {
    return `# ${userAnswers.title}
![Badge](https://img.shields.io/github/languages/count/${userAnswers.username}/${userAnswers.projectRepo})
![Badge](https://img.shields.io/github/issues/${userAnswers.username}/${userAnswers.projectRepo})
![Badge](https://img.shields.io/badge/license-${userAnswers.license}-red)
![Badge](https://img.shields.io/github/package-json/v/${userAnswers.username}/${userAnswers.projectRepo})
## DESCRIPTION  

${userAnswers.description}


## TABLE OF CONTENTS

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [Testing](#testing)
- [Questions](#questions)


## INSTALLATION

\`\`\`bash
${userAnswers.installation}
\`\`\`


## USAGE
${userAnswers.usage}

## CONTRIBUTION
${userAnswers.contribution}

## TESTING
${userAnswers.testing}

## CONTACT INFO
${userAnswers.registration}
`;
}

module.exports = generateMarkdown;