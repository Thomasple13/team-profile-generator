//Prompts for inquirer

// MANAGER
let managerPrompt = [
    {
        message:'Please enter the id of the manager.',
        type: 'input',
        name: 'managerID',
    },
    {
        message: 'Please enter the name of the manager.',
        type: 'input',
        name: 'managerName'
    },
    {
        message: 'Please enter the email of the manager.',
        type: 'input',
        name: 'managerEmail'
    },
    {
        message: 'What is the office number of the manager?',
        type: 'input',
        name: 'managerOff'
    },
]

// NEW TEAM MEMBER OR QUIT
let newTeamMember = [
    {
        message: 'Would you like to add a new team member?',
        type: 'list',
        name: 'choice',
        choices: ['Add Engineer', 'Add Intern', 'Done']
    }
]

//ENGINEER
let engineerPrompt = [
    {
        message: 'Please enter an ID for this Engineer',
        type: 'input',
        name: 'engineerID'
    },
    {
        message: 'Please enter the name for this Engineer',
        type: 'input',
        name: 'engineerName'
    },
    {
        message: 'Please enter the email for this Engineer',
        type: 'input',
        name: 'engineerEmail'
    },
    {
        message: "Please enter the Engineer's GitHub username",
        type: 'input',
        name: 'engineerGit'
    },
]


//INTERN
let internPrompt = [
    {
        message: 'Please enter an ID for this Intern',
        type: 'input',
        name: 'internID'
    },
    {
        message: 'Please enter the name for this Intern',
        type: 'input',
        name: 'internName'
    },
    {
        message: 'Please enter the email for this Intern',
        type: 'input',
        name: 'internEmail'
    },
    {
        message: 'Please enter the school of this Intern',
        type: 'input',
        name: 'internSchool'
    }
]

module.exports = {managerPrompt, newTeamMember, engineerPrompt, internPrompt}