import {MagicWarrior}  from "./MagicWarrior";
import {MeleeWarrior}  from "./MeleeWarrior";
import {TankWarrior}  from "./TankWarrior";

export class FactoryCharacter {
    public static createCharacter(type: string){
        if(type === "MagicWarrior"){
            return new MagicWarrior()
        }
        else if(type === "MeleeWarrior"){
            return new MeleeWarrior()
        }
        else if(type === "TankWarrior"){
            return new TankWarrior()
        }
        else{
            throw new Error("Error type");            
        }
    }
}