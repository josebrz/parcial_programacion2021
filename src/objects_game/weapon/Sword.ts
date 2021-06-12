import {Weapon}  from "./Weapon";

export class Sword extends Weapon {
    constructor() {
        super(3100, 2000)
    }
    basicAttack(){
        this.durability -= 50
        return this.attackPower
    }
    specialAttack(){
        this.durability -= 200
        return this.attackPower * Math.random() * 250
    }
}