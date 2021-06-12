import { Factory } from "../factories/Factory";
import * as readline from "readline";
import { FactoryCharacter } from "../factories/FactoryCharacter";
import { FactoryWeapon } from "../factories/FactoryWeapon";
import { Character } from "../objects_game/character/Character";
import { Weapon } from "../objects_game/weapon/Weapon";

export const promiseInput = (
    questionStr: string,
    questionChoose: string,
    type: string,
    case1: string,
    case2: string,
    case3: string): Promise<any> => {

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
                    reject(new Error("Respuesta invalida!"));
                    break;
            }
            question.close();
        });
    })
}

export const createEnemyBackground = () => {
    return new Promise((resolve: any, reject: any) => {
        const randomWarrior = Math.floor(Math.random() * 2);
        const randomWeapon = Math.floor(Math.random() * 2);
        let weaponEnemy: Weapon;
        let warriorEnemy: Character;

        switch (randomWarrior) {
            case 0:
                warriorEnemy = FactoryCharacter.create("MagicWarrior");
                break;
            case 1:
                warriorEnemy = FactoryCharacter.create("MeleeWarrior");
                break;
            case 2:
                warriorEnemy = FactoryCharacter.create("TankWarrior");
                break;
            default:
                warriorEnemy = FactoryCharacter.create("MagicWarrior");
                break;
        }
        switch (randomWeapon) {
            case 0:
                weaponEnemy = FactoryWeapon.create("Hammer");
                break;
            case 1:
                weaponEnemy = FactoryWeapon.create("Sword");
                break;
            case 2:
                weaponEnemy = FactoryWeapon.create("Wand");
                break;
            default:
                weaponEnemy = FactoryWeapon.create("Wand");
                break;
        }
        warriorEnemy.addWeapon(weaponEnemy);
        resolve(warriorEnemy);
    })
}