import {Character} from './Character';
import { Weapon } from '../weapon/Weapon';

export class MeleeWarrior extends Character{
    constructor(){
        super(13_000, 1500, 1000, 'TankWarrior', 'MeleeWarrior')
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
        this.weapon.effectiveness = this.weapon.name == 'Sword' ? 1 : this.weapon.name == 'Wand' ? 0.1 : 0.8
    }

    public attack(personaje: Character): number {
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
                attack += this.attackPower / 3;
            }
        }
        return attack;
    }

    defend(attackPoints: number, enemy: Character): number {
        let remainingLife: number;
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            remainingLife = attackPoints / 3
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