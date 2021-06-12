import {Weapon}  from "./Weapon";

export class Wand extends Weapon {
    constructor() {
        super(300, 3000)
    }

    basicAttack(){
        this.durability -= 10
        return this.attackPower
    }

    specialAttack(){
        this.durability -= 30
        return this.attackPower + Math.random() * 2500
    }

}


// public specialAttack() {
//     let attack: number
//     attack = Math.floor(Math.random() * 2);
//     attack *= this.attackPower
//     if (attack === 2) {
//         this.magicAttack()
//     }
// }
//
// private magicAttack(): number{
//     return 3;
// }