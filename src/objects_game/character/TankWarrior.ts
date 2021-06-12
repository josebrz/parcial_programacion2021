import {Character} from './Character';
import {Hammer} from '../weapon/Hammer';
import { Weapon } from '../weapon/Weapon';


export class TankWarrior  extends Character{
    private hammer: Hammer;

    constructor(){
        super(3500, 600, 5000,'MagicWarrior')
        this.hammer = new Hammer();
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }
    
    attack(personaje: Character): number {
        let attack: number = 0;
        if(personaje.constructor.name != this.weakness){
            attack = this.hammer.basicAttack();
            attack += this.attackPower;   
        }
        else{
            attack = this.hammer.basicAttack();
            attack += this.attackPower / 2;
        }
        return attack;
    }  
    public defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }

}