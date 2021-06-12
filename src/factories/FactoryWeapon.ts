import {Hammer}  from "../objects_game/weapon/Hammer";
import {Sword}  from "../objects_game/weapon/Sword";
import {Wand}  from "../objects_game/weapon/Wand";

export class FactoryWeapon {
    public static createWeapon(type: string){
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