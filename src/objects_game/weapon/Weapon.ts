export abstract class Weapon {
    public effectiveness: number = 1;
    public name: string = "";

    protected constructor(
        protected attackPower: number,
        public durability: number
    ) { }

    public attack():number{
        const typeAttack: number = Math.floor(Math.random() * 5);
        if(typeAttack === 4){
            return this.specialAttack()
        }
        else{
            return this.basicAttack()
        }
    }

    protected abstract basicAttack():number;
    protected abstract specialAttack(): number;
}