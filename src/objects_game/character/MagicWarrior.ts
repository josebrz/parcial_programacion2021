import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';

export class MagicWarrior extends Character{
    constructor(){
        super(1750, 800, 1000, 'MeleeWarrior', 'MagicWarrior')
    }
    
    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    public attack(personaje: Character): number {
        let attack: number = 0;
        if(personaje.constructor.name != this.weakness){
            if(this.weapon){
                attack = this.weapon.attack();
                attack += this.attackPower;
            }
        }
        else{
            if(this.weapon){
                attack = this.weapon.attack();
                attack += this.attackPower / 1.5;
            }
        }
        return attack;
}
    
    defend(attackPoints: number, enemy: Character): void {
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            this.life -= attackPoints / 4
        }
        else{
            this.life -= attackPoints - this.armor
            this.armor = 0
        }
    }
}