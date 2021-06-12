import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';

export class MeleeWarrior extends Character{
    constructor(){
        super(1300, 1500, 1000, 'TankWarrior')
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    public attack(personaje: Character): number {
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
                attack += this.attackPower / 3;
            }
        }
        return attack;
    } 
    
    defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }
}