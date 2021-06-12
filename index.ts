import {MagicWarrior}  from "./src/objects_game/character/MagicWarrior";
import {MeleeWarrior}  from "./src/objects_game/character/MeleeWarrior";
import {TankWarrior}  from "./src/objects_game/character/TankWarrior";
import {Character}  from "./src/objects_game/character/Character";
import * as readline from "readline";

console.log("\t-----------------------------------");
console.log("\t------ SUPER CESIT GAME  ----------");
console.log("\t-----------------------------------");

let warrior: Character;

let question1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Por favor eleguir un personaje. Ingresar solo el nº");
question1.question("1 - Magic Warrior\n2 - Melee Warrior\n3 - Tank Warrior\n", (answer) => {
  switch(answer.toLowerCase()) {
    case "1":
      warrior = new MagicWarrior()
      question2asinc();
      break;
    case "2":
      warrior = new MeleeWarrior()
      question2asinc();
      break;
    case "3":
      warrior = new TankWarrior()
      question2asinc();
      break;
    default:
      console.log("Invalid answer!");
  }
  question1.close();
});

const question2asinc = ()=> {
    
    console.log(warrior)
    
    let question2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      console.log("Por favor eleguir un personaje. Ingresar solo el nº");
      question2.question("1 - Magic Warrior\n2 - Melee Warrior\n3 - Tank Warrior", (answer) => {
        switch(answer.toLowerCase()) {
          case "1":
            console.log("Super!");
            break;
          case "2":
            console.log("Sorry! :(");
            break;
          case "3":
            console.log("Sorry! :(");
            break;
          default:
            console.log("Invalid answer!");
        }
        question2.close();
      });

}    
