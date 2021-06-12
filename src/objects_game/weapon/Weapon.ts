export abstract class Weapon {
    protected constructor(
        protected attackPower: number,
        public durability: number
    ) { }

    public attack():number{
        const typeAttack: number = Math.floor(Math.random() * 5);
        if(typeAttack === 5){
            return this.specialAttack()
        }
        else{
            return this.basicAttack()
        }
    }

    protected abstract basicAttack():number;
    protected abstract specialAttack(): number;
}