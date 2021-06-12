import {Weapon}  from "./Weapon";

export class Hammer extends Weapon {
    constructor() {
        super(2000, 2300);
        this.name = "Hammer";
    }

    basicAttack():number{
        if (this.durability > 0) {
            this.durability -= 30
            return this.attackPower * this.effectiveness
        } else {
            return 0
        }
        
    }

    specialAttack():number{
        this.durability -= 150
        return this.attackPower + Math.random() * 220
    }
}