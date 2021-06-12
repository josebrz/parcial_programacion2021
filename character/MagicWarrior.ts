import {Character} from './Character';
import {Wand} from '../weapon/Wand';

export class MagicWarrior extends Character{
    private wand: Wand;

    constructor(){
        super(1750, 800, 1000, 'MeleeWarrior')
        this.wand = new Wand()
    }

    public attack(personaje: Character): number {
        let attack: number;
        if(personaje.constructor.name != this.weakness){
            attack = this.wand.basicAttack();
            attack += this.attackPower;   
        }
        else{
            attack = this.wand.basicAttack();
            attack += this.attackPower / 1.5;
        }
        return attack;
    }
    
    defend(attackPoints: number): void {
        throw new Error("Method not implemented.");
    }
}