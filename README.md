#Parcial de Programación II#

### Alumnos: Conil Nicolas, Brizuela José, Catalano Nicolas ###

#### Teoria
#####Sistema: Video Juego
***

   Las clases abstractas son aquellas clases que no existen en el mundo real, pero solo pueden ser ocupadas a través de la Herencia y los metodos abstactos tambien pueden usarse a traves de la Herencia y todas las clases que hereden estos metodos, van a tener que utilizarlo.

clases y metodos abstactas del juego: 

	abstract class Character{
    constructor(
      protected lifetimes: number,
      protected attackPower: number,
      protected weakness: string,
      protected weapon: Weapon ){}

    public abstract attack(personaje: Character): number;
   	}`

.

	abstract class Weapon{
    constructor(
    protected attackPower:number, 
    protected durability:number){}
  
    abstract basicAttack(weapons: Weapon): number{}

    abstract private specialAttack(weapons: Weapons){}
    }


El poliformismo es un concepto muy presente en la programacion que es cuando tenemos una accion común y cada objeto lo interpreta a su modo. En nuestro juego esta integrado, ya que los ataques y algunas propiedades de los personajes, son Heredados a cada clase y cada uno de estos lo ejecuta de manera diferente. En este caso el poliformismo se da en la herencia.


    class TankWarrior  extends Character{
    private armor: number;

    constructor(weapon: Weapon){
        super(150, 25, 'MagicWarrior', weapon)
        this.armor = 50;
    }

    attack(personaje: Character): number {}

.

	
    class Wand extends Weapon(){
  	constructor(attackPower:number, durability: number){
    super(17, 100);}
 	basicAttack(wand: Wand){
    return };
  	specialAttack(wand: Wand){}


ademas nestro juego cuenta con 3 distintos personajes:
 
 1. guerrero cuerpo a cuerpo
 2. guerrero tanque 
 3. guerrero magico

y tambien hemos creado 3 armas para cada personaje:

1. varita mágica
2. martillo
3. espada

y cada una de estas armas tiene un poder especial al llegar a su maximo potencial. 

El juego se desarrollará en la pelea entre 2 persoanjes, cada uno de estos poseerá un arma que lo que le hará sera aumentar su poder.

El usuario tendra la opcion de elegir que personaje quiere ocupar.  

Cada arma que utilicen tendrán un poder basico, que es el daño que hará siempre, y tambien tendra el ataque especial, que se basará en ponetnciar el ataque comun, y si este ataque llega al maximo potencial podrá activar un ataque distinto, por ejemplo: la varita tendrá el poder de curarse por un tiempo limitado, la espada tendra veneno que le sacará mas vida al contrincante y por ultimo el martillo.

el juego finalizará cuando uno de los dos personajes haya sido derrotado.

