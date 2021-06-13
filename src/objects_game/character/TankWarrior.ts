import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';


export class TankWarrior extends Character{
    constructor(){
        super(35_000, 600, 5000,'MagicWarrior', 'TankWarrior')
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
        this.weapon.effectiveness = this.weapon.name == 'Hammer' ? 1 : this.weapon.name == 'Wand' ? 0.1 : 0.8
    }
    
    attack(personaje: Character): number {
        let attack: number = 0;
        if(personaje.name != this.weakness){
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

    defend(attackPoints: number, enemy: Character): number {
        let remainingLife: number;
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            remainingLife = attackPoints / 15
            this.life -= remainingLife
        }
        else{
            remainingLife = attackPoints - this.armor
            this.life -= remainingLife
            this.armor = 0
        }
        if (enemy.name != 'TankWarrior') {
            if (['Sword', 'Hammer', 'Fist'].includes(enemy.weapon.name)) {
                 enemy.defend(attackPoints / 5, this)
            }
        }
        return remainingLife
    }
}