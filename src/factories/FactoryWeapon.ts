import {Dagger}  from "../weapon/Dagger";
import {Sword}  from "../weapon/Sword";
import {Wand}  from "../weapon/Wand";
import { Weapon } from "../weapon/Weapon";

export class FactoryWeapon {
    public static create(type: string): Weapon {
        if(type === "Dagger"){
            return new Dagger()
        }
        else if(type === "Sword"){
            return new Sword()
        }
        else if(type === "Wand"){
            return new Wand()
        }
        else{
            throw new Error("Error type");            
        }
    }
}