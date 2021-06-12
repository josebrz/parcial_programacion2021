import {Weapon}  from "./Weapon";

export class Wand extends Weapon {
    constructor() {
        super(300, 3000)
        this.name = "Wand";
    }

    basicAttack(){
        if (this.durability > 0) {
            this.durability -= 10
            return this.attackPower * this.effectiveness
        } else {
            return 0
        }
        
    }

    specialAttack(){
        if (this.durability > 0) {
            this.durability -= 30
            let attack: number = 0;

            const random = Math.floor(Math.random() * 2);
            if (random === 1) {
                this.magicAttack()
            }

            attack = this.attackPower + Math.random() * 2500;
            return attack
        } else {
            return 0
        }
        
    }
    
    private magicAttack(): number{
        return Math.random() * 500;
    }

}    