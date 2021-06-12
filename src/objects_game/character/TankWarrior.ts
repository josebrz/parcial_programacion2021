import {Character} from './Character';
import {Hammer} from '../weapon/Hammer';
import { Weapon } from '../weapon/Weapon';


export class TankWarrior  extends Character{

    constructor(){
        super(3500, 600, 5000,'MagicWarrior')
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
    public defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }

}