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
            message: 'Provide instructions and examples for use of this project. (Required)',
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
            type: 'list',
            name:'license',
            message: '',
            choices: ['MIT', 'APACHE', 'AGPL', 'No license']
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
    .then(questions)
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
