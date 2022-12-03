import inquirer from "inquirer";
import fs from 'fs'
import {managerPrompt, newTeamMember, engineerPrompt, internPrompt} from './lib/prompts.js'
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from './lib/Intern.js'
import { genManager, genEngineer, genIntern } from './lib/cardRenderer.js'
import htmlRenderer from './lib/htmlRenderer.js'


async function start(){
    console.log('Start by entering the info for the manager for the team.')

    // Adding manager info
    let string = await inquirer.prompt(managerPrompt)
    .then((answer) => new Manager(answer.managerID, answer.managerName, answer.managerEmail, answer.managerOff))
    .then((answer) => genManager(answer))
    console.log('Next enter the information of the team members.')

    // Adding Engineer info
    async function newEngineer(){
        await inquirer.prompt(engineerPrompt)
        .then((answer) => new Engineer(answer.engineerID, answer.engineerName, answer.engineerEmail, answer.engineerGit))
        .then((answer) => genEngineer(answer))
        .then((answer) => string = string.concat('\n', answer))
        .then((answer) => newTeam())
        //Add option to create another engineer
    }

    // Adding Intern info
    async function newIntern(){
        await inquirer.prompt(internPrompt)
        .then((answer) => new Intern(answer.internID, answer.internName, answer.internEmail, answer.internSchool))
        .then((answer) => genIntern(answer))
        .then((answer) => string = string.concat('\n', answer))
        .then((answer) => newTeam())
    }

    async function newTeam(){
        await inquirer.prompt(newTeamMember)
        .then((answer) => {
            if(answer.choice == 'Add Engineer'){
                newEngineer()
            }else if (answer.choice == 'Add Intern'){
                newIntern()
            }else{
                return saveHTML(string)
            }
        })
    }
    await newTeam();
}

function saveHTML (cardString){
    const fullHTMLString = htmlRenderer(cardString)
    fs.writeFile(`./dist/MyTeam-index.html`, fullHTMLString, (err) => err ? console.error(err) : console.log('----------------------------'));
}

start();