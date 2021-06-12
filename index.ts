
// Parcial de programacion. Alumnos: Conil Nicolas, Brizuela José, Catalano Nico Puto
import { Factory } from "./src/factories/Factory";
import { Character } from "./src/objects_game/character/Character";
import * as readline from "readline";
import { Weapon } from "./src/objects_game/weapon/Weapon";


console.log("\t-----------------------------------");
console.log("\t------ SUPER CESIT GAME  ----------");
console.log("\t-----------------------------------");

let warrior: Character;

const promiseInput = (
  questionStr: string,
  questionChoose: string,
  type:string,
  case1: string,
  case2: string,
  case3: string) => {
  
  return new Promise((resolve: any, reject: any) => {
    let question = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    console.log(questionStr);
    question.question(questionChoose, (answer: string) => {
      switch (answer) {
        case "1":
          resolve(Factory.create(type, case1))
          break;
        case "2":
          resolve(Factory.create(type, case2))
          break;
        case "3":
          resolve(Factory.create(type, case3))
          break;
        default:
          console.log("Respuesta invalida!");
          break;
      }
      question.close();
    });
  })
}

promiseInput(
  "\nPor favor eleguir un personaje. Ingresar solo el nº",
  "1 - Mago\n2 - Luchador cuerpo a cuerpo\n3 - Tanque\n\n>>> ",
  "Character",
  "MagicWarrior",
  "MeleeWarrior",
  "TankWarrior")
  .then((warriorReturn: Character) =>{
    console.info(warriorReturn)
    promiseInput(
      "\nPor favor eleguir un arma para su personaje. Ingresar solo el nº",
      "1 - Daga\n2 - Espada\n3 - Varita Magica\n\n>>> ",
      "Weapon",
      "Dagger",
      "Sword",
      "Wand"
    )
    .then((weaponReturn: Weapon) => {
      console.log(weaponReturn)
    })
    .catch((error: string) => {
      console.error(error);
      console.log("Fin del Juego")
    })
  })
  .catch((error: string) => {
    console.error(error);
    console.log("Fin del Juego")
  })

