import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';

export class MagicWarrior extends Character{
    constructor(){
        super(1750, 800, 1000, 'MeleeWarrior')
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
    
    defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }
}