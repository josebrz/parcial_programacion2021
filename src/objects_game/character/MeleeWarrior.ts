import {Character} from './Character';
import {Sword} from '../weapon/Sword';
import { Weapon } from '../weapon/Weapon';

export class MeleeWarrior extends Character{
    private sword: Sword;
    
    constructor(){
        super(1300, 1500, 1000, 'TankWarrior')
        this.sword = new Sword()
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    public attack(personaje: Character): number {
        let attack: number;
        if(personaje.constructor.name != this.weakness){
            attack = this.sword.basicAttack();
            attack += this.attackPower;   
        }
        else{
            attack = this.sword.basicAttack();
            attack += this.attackPower / 3;
        }
        return attack;
    } 
    
    defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }
}