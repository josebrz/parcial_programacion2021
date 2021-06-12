import {Weapon}  from "./Weapon";

export class Fist extends Weapon {
    constructor() {
        super(30, 100);
        this.name = "Fist";
    }

    basicAttack():number{
        return this.attackPower
    }

    specialAttack():number{
        return this.attackPower * 2
    }
}