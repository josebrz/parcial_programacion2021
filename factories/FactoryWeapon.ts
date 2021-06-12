import {Hammer}  from "../weapon/Hammer";
import {Sword}  from "../weapon/Sword";
import {Wand}  from "../weapon/Wand";

export class FactoryCharacter {
    public static createCharacter(type: string){
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