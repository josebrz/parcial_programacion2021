import {Weapon} from '../weapon/Weapon';

export abstract class Character{
    public weapon: Weapon | undefined
    public totalLife: number

    protected constructor(
      public life: number,
      protected attackPower: number,
      public armor: number,
      protected weakness: string,
      public name: string,
    ){
        this.totalLife = this.life
    }
    
    public abstract addWeapon(weapon: Weapon): void;
    public abstract attack(personaje: Character): number;
    public abstract defend(attackPoints: number, enemy: Character): void;
}