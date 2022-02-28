// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Please describe this project. What was the motive? Why was this project built? What problem does it solve? What knowledge was gained? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },        
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Are there steps to install this project?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install this project? (Required)',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for usage of this project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like others to contribute to this project?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide instructions for how others can contribute to this project.',
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Are there any test for this project to include in the README.md?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide information on how to run your tests',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name:'license',
            message: 'What license would you like to use for this project?',
            choices: ['MIT', 'APACHE', 'AGPL', 'No license']
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'Please enter your GitHub username. (Required)',
            validate: gitHubUserInput => {
                if (gitHubUserInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }, 
    ]);
}

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error reject promise
            if (err) {
                reject(err);
                return;
            }

            // file created if no errors
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
questions()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
