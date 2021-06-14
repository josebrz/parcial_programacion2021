// Parcial de programacion. Alumnos: Conil Nicolas, Brizuela José, Catalano Nico
import { promiseInput, createEnemyBackground } from "./src/configs/promises";
import { Character } from "./src/objects_game/character/Character";
import { Weapon } from "./src/objects_game/weapon/Weapon";


console.log("\t-----------------------------------");
console.log("\t------ SUPER CESIT GAME  ----------");
console.log("\t-----------------------------------");

let warrior: Character;
let numberAttack: number = 1;

const app = async () => {
  try {

    warrior = await promiseInput(
      "\nPor favor elegir un personaje. Ingresar solo el nº",
      "1 - Mago\n2 - Luchador cuerpo a cuerpo\n3 - Tanque\n\n>>> ",
      "Character",
      "MagicWarrior",
      "MeleeWarrior",
      "TankWarrior")

    let weapon: any, enemy: any;
    [weapon, enemy] = await Promise.all([promiseInput(
      "\nPor favor elegir un arma para su personaje. Ingresar solo el nº",
      "1 - Martillo\n2 - Espada\n3 - Varita Magica\n\n>>> ",
      "Weapon",
      "Hammer",
      "Sword",
      "Wand"), createEnemyBackground()])


    warrior.addWeapon(weapon);
    console.log("\t\tTU PERSONAJE ES:");
    console.info(warrior);
    console.log("\t\tPELEARA CONTRA:");
    console.log(enemy);

    while (warrior.life > 0 && enemy.life > 0) {

      console.log("\n\t ----------------- ATAQUE Nº " + numberAttack + " -----------------\n");
      numberAttack++;

      let atack = warrior.attack(enemy)
      console.log(`Tu personaje genero un ataque de ${Math.floor(atack)}`);

      let lifeSubtracted: number = enemy.defend(atack, warrior);
      console.log(`El enemigo quedo con una vida de ${Math.floor(Math.floor(enemy.life))}/${enemy.totalLife} debido al último ataque que le resto ${Math.floor(lifeSubtracted)}.`);
      
      if(enemy.life <= 0){
        break
      }else{
        console.log("\n\t ----------------- ATAQUE Nº " + numberAttack + " -----------------\n");
        numberAttack++;
  
        atack = enemy.attack(warrior)
        console.log(`El enemigo genero un ataque de ${Math.floor(atack)}`);
  
        lifeSubtracted = warrior.defend(atack, enemy);
        console.log(`Tu personaje quedo con una vida de ${Math.floor(warrior.life)}/${warrior.totalLife} debido al último ataque que le resto ${Math.floor(lifeSubtracted)}.`);
      }
    }
    if(enemy.life <= 0){
      console.log("\n\t -------- FELIDADES GANASTE!!! --------");
      console.log("Tus personaje termino de la siguiente manera:");
      console.log(warrior);

    }else{
      console.log("\n\t -------- LO SENTIMOS PERO PERDISTE!!! --------");
      console.log("Tus personaje termino de la siguiente manera:");
      console.log(warrior);
    }



  } catch (error) {
    console.error(error);
    console.log("Fin del Juego");
  }

}
app();