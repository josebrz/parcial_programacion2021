import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';

export class MagicWarrior extends Character{
    constructor(){
        super(17_500, 800, 1000, 'MeleeWarrior', 'MagicWarrior')
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
    
    defend(attackPoints: number, enemy: Character): number {
        let remainingLife: number;
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            remainingLife = attackPoints / 4
            this.life -= remainingLife
        }
        else{
            remainingLife = attackPoints - this.armor
            this.life -= remainingLife
            this.armor = 0
        }
        return remainingLife
    }
}