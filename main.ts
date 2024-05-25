#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import { differenceInSeconds } from "date-fns"

console.log(chalk.bold.cyan`WelCome! to Word Counter`);


const res = await inquirer.prompt(
    [
        {
         name:"userInput",
         type:"number",
         message:chalk.magenta("Kindly Enter the Number of Seconds:"),
        validate :(input)=>{
            if(isNaN(input)){
                return chalk.green("Please Enter Valid Number")
            }else if(input >60){
                return chalk.blue("Second must be in 60")
            }else{
                return true;
            }
            
            
        }
        }
    ]
);
let input = res.userInput
function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
const intervalTime = new Date(intTime);
setInterval(()=> {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime)
if(timeDiff <=0){
    console.log(chalk.bold.red("Timer has expired"));
    process.exit();
    
}
const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
const sec= Math.floor(timeDiff % 60);
console.log(chalk.magenta(`${min.toString().padStart(2, "0")} : ${sec}`));


}, 1000);

}
startTime(input)


