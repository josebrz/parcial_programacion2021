import {Weapon}  from "./Weapon";

export class Hammer extends Weapon {
    constructor() {
        super(2000, 2300);
    }
    basicAttack(){
        this.durability -= 30
        return this.attackPower
    }
    specialAttack(){
        this.durability -= 200
        return this.attackPower * Math.random() * 220
    }
}