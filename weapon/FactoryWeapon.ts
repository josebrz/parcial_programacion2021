import {Hammer}  from "./Hammer";
import {Sword}  from "./Sword";
import {Wand}  from "./Wand";

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