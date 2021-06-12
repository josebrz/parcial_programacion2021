import {Weapon} from '../weapon/Weapon';
import {Fist} from '../weapon/Fist';


export abstract class Character{
    public weapon: Weapon
    public totalLife: number

    protected constructor(
      public life: number,
      protected attackPower: number,
      public armor: number,
      protected weakness: string,
      public name: string,
    ){
        this.totalLife = this.life
        this.weapon = new Fist()
    }
    
    public abstract addWeapon(weapon: Weapon): void;
    public abstract attack(personaje: Character): number;
    public abstract defend(attackPoints: number, enemy: Character): number;
}