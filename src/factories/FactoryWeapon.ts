import { Hammer }  from "../objects_game/weapon/Hammer";
import { Sword }  from "../objects_game/weapon/Sword";
import { Wand }  from "../objects_game/weapon/Wand";
import { Weapon } from "../objects_game/weapon/Weapon";

export class FactoryWeapon {
    public static create(type: string): Weapon {
        if(type === "Hammer"){
            return new Hammer()
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