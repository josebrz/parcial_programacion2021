import {MagicWarrior}  from "../objects_game/character/MagicWarrior";
import {MeleeWarrior}  from "../objects_game/character/MeleeWarrior";
import {TankWarrior}  from "../objects_game/character/TankWarrior";

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