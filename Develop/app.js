const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamArray = []
const render = require("./lib/htmlRenderer");


addManager()
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addManager(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Place your name here:",
            },
           {
                type: "input",
                name: "id",
                message: "Place your ID number here:",
            },
            // {
            //     type: "input",
            //     name: "GitHub",
            //     message: "Place your GitHub username here:",
            // },
            {
                type: "input",
                name: "email",
                message: "Place your email address here:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Place your office number here:",
            },
           
        ]) .then(data=>{
            const instance = new Manager(data.name,data.id,data.email,data.officeNumber)
            teamArray.push(instance)
            console.log(teamArray)
            addNewMember()
        })
    }


function addEngineer(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Place your name here:",
            },
           {
                type: "input",
                name: "id",
                message: "Place your ID number here:",
            },
            {
                type: "input",
                name: "GitHub",
                message: "Place your GitHub username here:",
            },
            {
                type: "input",
                name: "email",
                message: "Place your email address here:",
            },
            
           
        ]) .then(data=>{
            const instance = new Engineer(data.name,data.id,data.email,data.GitHub)
            teamArray.push(instance)
            console.log(teamArray)
            addNewMember()
        })
    }

    function addIntern(){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Place your name here:",
                },
               {
                    type: "input",
                    name: "id",
                    message: "Place your ID number here:",
                },
                // {
                //     type: "input",
                //     name: "GitHub",
                //     message: "Place your GitHub username here:",
                // },
                {
                    type: "input",
                    name: "email",
                    message: "Place your email address here:",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Place your school here:"
                },
                
               
            ]) .then(data=>{
                const instance = new Intern(data.name,data.id,data.email,data.GitHub)
                teamArray.push(instance)
                console.log(teamArray)
                addNewMember()
            })
        }
    
    
            function addNewMember(){
                inquirer.prompt([
                     {
                type: "list",
                name: "role",
                message: "Place your role as an employee here:",
                choices: ["Engineer", "Intern", "Manager","None"],
            }, 
                ]).then(data=>{
                    if(data.role==="Engineer"){
                        addEngineer()
                    }
                    else if(data.role==="Intern"){
                        addIntern()
                    }
                    else if(data.role==="Manager"){
                        addManager()
                    }
                    else{
                        console.log("Team created")
                        fs.writeFileSync("index.html", render(teamArray))
                    }
                })
            }
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.                                   

