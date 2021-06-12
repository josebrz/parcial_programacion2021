import {FactoryWeapon} from "./FactoryWeapon";
import {FactoryCharacter} from "./FactoryCharacter";


export class AbstractFactory {
    public static createFactory(type: string){
        if(type === "FactoryWeapon"){
            return new FactoryWeapon()
        }
        else if(type === "FactoryCharacter"){
            return new FactoryCharacter()
        }
        else{
            throw new Error("Error type");
        }
    }
}