import {Weapon} from '../weapon/Weapon';

export abstract class Character{
    protected weapon: Weapon | undefined

    protected constructor(
      protected life: number,
      protected attackPower: number,
      protected armor: number,
      protected weakness: string,
    ){}
    
    public abstract addWeapon(weapon: Weapon): void;
    public abstract attack(personaje: Character): number;
    public abstract defend(attackPoints: number): void;
}