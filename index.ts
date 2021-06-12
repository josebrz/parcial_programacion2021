// Parcial de programacion. Alumnos: Conil Nicolas, Brizuela José, Catalano Nico
import { promiseInput, createEnemyBackground } from "./src/configs/promises";
import { Character } from "./src/objects_game/character/Character";
import { Weapon } from "./src/objects_game/weapon/Weapon";


console.log("\t-----------------------------------");
console.log("\t------ SUPER CESIT GAME  ----------");
console.log("\t-----------------------------------");

let warrior: Character;

const app = async () => {
  try{

    warrior = await promiseInput(
      "\nPor favor eleguir un personaje. Ingresar solo el nº",
      "1 - Mago\n2 - Luchador cuerpo a cuerpo\n3 - Tanque\n\n>>> ",
      "Character",
      "MagicWarrior",
      "MeleeWarrior",
      "TankWarrior")
    console.log(warrior);

  }catch (error){
    console.error(error.message);
    console.log("Fin del Juego");
  }
  
}
// app();

promiseInput(
  "\nPor favor eleguir un personaje. Ingresar solo el nº",
  "1 - Mago\n2 - Luchador cuerpo a cuerpo\n3 - Tanque\n\n>>> ",
  "Character",
  "MagicWarrior",
  "MeleeWarrior",
  "TankWarrior"
  )
  .then((warriorReturn: Character) =>{
    Promise.all([promiseInput(
      "\nPor favor eleguir un arma para su personaje. Ingresar solo el nº",
      "1 - Martillo\n2 - Espada\n3 - Varita Magica\n\n>>> ",
      "Weapon",
      "Hammer",
      "Sword",
      "Wand"
    ), createEnemyBackground()])
    .then((result: any[]) => {
      // Realizamos destructuring en los resultados de las promeasas
      const [weaponReturn, enemyReturn] = result

      warriorReturn.addWeapon(weaponReturn);
      console.log("\t\tTU PERSONAJE ES:");
      console.info(warriorReturn);
      console.log("\t\tPELIARA CONTRA:");
      console.log(enemyReturn);
      
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

