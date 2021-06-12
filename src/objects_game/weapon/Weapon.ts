export abstract class Weapon {
    protected constructor(
        protected attackPower: number,
        public durability: number
    ) { }

    public abstract basicAttack():number;
    public abstract specialAttack(): number;
}