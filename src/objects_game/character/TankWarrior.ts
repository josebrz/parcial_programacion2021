import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';


export class TankWarrior  extends Character{
    constructor(){
        super(3500, 600, 5000,'MagicWarrior', 'TankWarrior')
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }
    
    attack(personaje: Character): number {
        let attack: number = 0;
        if(personaje.constructor.name != this.weakness){
            if(this.weapon) {
                attack = this.weapon.attack();
                attack += this.attackPower;
            }
        }
        else{
            if(this.weapon) {
                attack = this.weapon.attack();
                attack += this.attackPower / 2;
            }
        }
        return attack;
    }

    defend(attackPoints: number, enemy: Character): void {
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            this.life -= attackPoints / 15
        }
        else{
            this.life -= attackPoints - this.armor
            this.armor = 0
        }
        if(['Sword', 'Hammer'].includes(enemy.weapon.name) && enemy.name != 'TankWarrior'){
            enemy.defend(attackPoints/5, this)
        }
    }
}