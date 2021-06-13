// Parcial de programacion. Alumnos: Conil Nicolas, Brizuela José, Catalano Nico
import { promiseInput, createEnemyBackground } from "./src/configs/promises";
import { pelea, peleaPromise } from "./src/pelea";
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

    const weapon = await promiseInput(
      "\nPor favor eleguir un arma para su personaje. Ingresar solo el nº",
      "1 - Martillo\n2 - Espada\n3 - Varita Magica\n\n>>> ",
      "Weapon",
      "Hammer",
      "Sword",
      "Wand")

    const enemy: any = await createEnemyBackground()
    warrior.addWeapon(enemy);
    console.log("\t\tTU PERSONAJE ES:");
    console.info(warrior);
    console.log("\t\tPELIARA CONTRA:");
    console.log(enemy);




  }catch (error){
    console.error(error.message);
    console.log("Fin del Juego");
  }
  
}
app();

// promiseInput(
//   "\nPor favor eleguir un personaje. Ingresar solo el nº",
//   "1 - Mago\n2 - Luchador cuerpo a cuerpo\n3 - Tanque\n\n>>> ",
//   "Character",
//   "MagicWarrior",
//   "MeleeWarrior",
//   "TankWarrior"
//   )
//   .then((warriorReturn: Character) =>{
//     Promise.all([promiseInput(
//       "\nPor favor eleguir un arma para su personaje. Ingresar solo el nº",
//       "1 - Martillo\n2 - Espada\n3 - Varita Magica\n\n>>> ",
//       "Weapon",
//       "Hammer",
//       "Sword",
//       "Wand"
//     ), createEnemyBackground()])
//     .then((result: any[]) => {
//       // Realizamos destructuring en los resultados de las promeasas
//       let weaponReturn: Weapon, enemyReturn: Character;
//       [weaponReturn, enemyReturn] = result

//       warriorReturn.addWeapon(weaponReturn);
//       console.log("\t\tTU PERSONAJE ES:");
//       console.info(warriorReturn);
//       console.log("\t\tPELIARA CONTRA:");
//       console.log(enemyReturn);

//       // pelea(warriorReturn, enemyReturn).then((res: string)=> {
//       //   console.log(res)
//       // })
//       pelea(warriorReturn, enemyReturn)
      
      
//       // while (warriorReturn.life >= 0 && enemyReturn.life >= 0) {
//       //   // ATACK ONE
//       //   let atack = warriorReturn.attack(enemyReturn)
//       //   console.log(`El personaje ${warriorReturn.name} genero un ataque de ${atack}`);

//       //   let lifeSubtracted: number = enemyReturn.defend(atack, warriorReturn);
//       //   console.log(`El personaje ${enemyReturn.name} quedo con una vida de ${enemyReturn.life}/${enemyReturn.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);

//       //   // ATACK TWO
//       //   atack = enemyReturn.attack(warriorReturn)
//       //   console.log(`El personaje ${enemyReturn.name} genero un ataque de ${atack}`);

//       //   lifeSubtracted = warriorReturn.defend(atack, enemyReturn);
//       //   console.log(`El personaje ${warriorReturn.name} quedo con una vida de ${warriorReturn.life}/${warriorReturn.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);
//       // }

//         // setInterval(() => {
           

//         //     setInterval(() => {
//         //         const atack = enemyReturn.attack(warriorReturn)
//         //         console.log(`El personaje ${enemyReturn.name} genero un ataque de ${atack}`);
    
//         //         const lifeSubtracted: number = warriorReturn.defend(atack, enemyReturn);
//         //         console.log(`El personaje ${warriorReturn.name} quedo con una vida de ${warriorReturn.life}/${warriorReturn.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);
                
//         //     }, 200);

//         // }, 200);

        
      
      
//     })
//     .catch((error: string) => {
//       console.error(error);
//       console.log("Fin del Juego")
//     })
  
//   })

//   .catch((error: string) => {
//     console.error(error);
//     console.log("Fin del Juego")
//   })

