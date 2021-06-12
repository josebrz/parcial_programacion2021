import {MagicWarrior}  from "../objects_game/character/MagicWarrior";
import {MeleeWarrior}  from "../objects_game/character/MeleeWarrior";
import {TankWarrior}  from "../objects_game/character/TankWarrior";
import { Character } from "../objects_game/character/Character";

export class FactoryCharacter {
    public static create(type: string): Character{
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