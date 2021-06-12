export abstract class Weapon {
    protected constructor(
        protected attackPower: number,
        public durability: number
    ) { }
    public attack():number{
        return 0
    }
    public abstract basicAttack():number;
    public abstract specialAttack(): number;
}