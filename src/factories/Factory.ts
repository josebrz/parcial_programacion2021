import { Character }  from "../objects_game/character/Character";
import { Weapon }  from "../objects_game/weapon/Weapon";
import { FactoryCharacter }  from "./FactoryCharacter";
import { FactoryWeapon }  from "./FactoryWeapon";

export class Factory {
    public static create(typeFactory: string, typeObject: string): Character | Weapon{
        if(typeFactory === "Character"){
            return FactoryCharacter.create(typeObject)
        }
        else if(typeFactory === "Weapon"){
            return FactoryWeapon.create(typeObject)
        }
        else{
            throw new Error("Error type");            
        }
        
    }
}