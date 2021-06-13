import {Weapon}  from "./Weapon";

export class Sword extends Weapon {
    constructor() {
        super(3100, 2000)
        this.name = "Sword";
    }

    basicAttack():number{
        if (this.durability > 0) {
            this.durability -= 50
            return this.attackPower * this.effectiveness
        } else {
            return 0
        }
    }
    specialAttack():number{
        this.durability -= 200
        return this.attackPower + Math.random() * 250
    }
}