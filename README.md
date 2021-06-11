# Parcial de Programación II #

### Alumnos: Conil Nicolas, Brizuela José, Catalano Nicolas ###

#### Teoria
##### Sistema: Video Juego
***
Nosotros desarrollamos un videojuego de luchas, donde contamos con las siguientes cosas:  


Utilizamos las clases abstractas, que son aquellas clases que no existen en el mundo real, pero solo pueden ser ocupadas a través de la Herencia y los metodos abstactos tambien pueden usarse a través de la misma manera y todas las clases que hereden estos atributos y metodos, van a tener que utilizarlo.

clases y metodos abstactas del juego: 

	abstract class Character{
    public weapon: Weapon
    public totalLife: number

    constructor(
      public life: number,
      protected attackPower: number,
      public armor: number,
      public weakness: string,
      public name: string,){
        this.totalLife = this.life
        this.weapon = new Fist()
    }
    
    public abstract addWeapon(weapon: Weapon): void;
    public abstract attack(personaje: Character): number;
    public abstract defend(attackPoints: number, enemy: Character): number;
	}

.

	abstract class Weapon {
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


El poliformismo es un concepto muy presente en la programación que es cuando tenemos una accion común y cada objeto lo interpreta a su modo. En el juego esta integrado, ya que los metodos de los personajes, son Heredados a cada clase y cada uno de estos lo ejecuta de manera diferente. En este caso el poliformismo se da en la herencia.


    class TankWarrior extends Character{
    constructor(){
        super(35_000, 600, 5000,'MagicWarrior', 'TankWarrior')
    }

    public addWeapon(weapon: Weapon): void {
        this.weapon = weapon;
        this.weapon.effectiveness = this.weapon.name == 'Hammer' ? 1 : this.weapon.name == 'Wand' ? 0.1 : 0.8
    }
    
    attack(personaje: Character): number {
        let attack: number = 0;
        if(personaje.name != this.weakness){
            if(this.weapon) {
                attack = this.weapon.attack();
                attack += this.attackPower;
            }
        }
        else{
            if(this.weapon) {
                attack = this.weapon.attack();
                attack += this.attackPower / 2;
            }
        }
        return attack;
    }

    defend(attackPoints: number, enemy: Character): number {
        let remainingLife: number;
        if(this.armor >= attackPoints){
            this.armor -= attackPoints
            remainingLife = attackPoints / 15
            this.life -= remainingLife
        }
        else{
            remainingLife = attackPoints - this.armor
            this.life -= remainingLife
            this.armor = 0
        }
        if (enemy.name != 'TankWarrior') {
            if (['Sword', 'Hammer', 'Fist'].includes(enemy.weapon.name)) {
                 enemy.defend(attackPoints / 5, this)
            }
        }
        return remainingLife
    }
	
.

	
	class Wand extends Weapon {
    constructor() {
        super(300, 3000)
        this.name = "Wand";
    }

    basicAttack(){
        if (this.durability > 0) {
            this.durability -= 10
            return this.attackPower * this.effectiveness
        } else {
            return 0
        }
        
    }

    specialAttack(){
        if (this.durability > 0) {
            this.durability -= 30
            let attack: number = 0;

            const random = Math.floor(Math.random() * 2);
            if (random === 1) {
                this.magicAttack()
            }

            attack = this.attackPower + Math.random() * 6000;
            return attack
        } else {
            return 0
        }
    }
    
    private magicAttack(): number{
        return Math.random() * 500;
    }

}    

También en nustro juego utilizamos el patrón de diseño fabrica, ya que si el        usuario elige algun personaje o algun arma, este directamente se manda a la   fabrica para crear una nueva arma o un nuevo gerrero. tambien usamos las fabricas   abstractas que es para crear objetos, sin especificar una clase  en concreto y utilizamos un solo método y este es estatico.

El metodo estatico funciona de forma que no hace falta instanciarlo en la clase que lo usa, en nuesto caso la clase que es estatica es Factory weapons y factory character 

Tambien utilizamos promesas en nuestro codigo, las utilizamos con el async y await ya que tratamos de utilizar el .then pero se volvia costoso de leer, ademas utilizamos promise.all() que lo que hace es terminar todas las promesas para que no quede ninguna pendiente. 
 


Ademas cuenta con un menu donde se puede seleccionar los 3 distintos personajes:
 
 1. guerrero cuerpo a cuerpo
 2. guerrero tanque 
 3. guerrero magico
 


y tambien podemos elegir entre 3 armas que son para cada personaje:

1. varita mágica
2. martillo
3. espada

y cada una de estas armas tiene un poder especial al llegar a su maximo potencial. 

El juego se desarrollará en la pelea entre 2 persoanjes, cada uno de estos poseerá un arma que lo que le hará sera aumentar su poder.

El usuario tendra la opcion de elegir que personaje quiere ocupar.  

Cada arma que utilicen tendrán un poder basico, que es el daño que hará siempre, y tambien tendra el ataque especial, que se basará en ponetnciar el ataque comun, y si este ataque llega al maximo potencial podrá activar un ataque distinto, por ejemplo: la varita tendrá el poder de curarse por un tiempo limitado, la espada tendra veneno que le sacará mas vida al contrincante y por ultimo el martillo.

el juego finalizará cuando uno de los dos personajes haya sido derrotado.

***
### Como Correr el juego


  primero debemos instalar node Js, descargando del siguiente enlace: 

[https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi "Node Js")

luego de haberlo instalado Node, debemos instalar typescript de la siguiente forma:  

	npm install -g typescript 

Este comando lo escribimos en la consola del programa.
 
Luego, una vez de tener estos complementos instalados, debemos poner en la consola lo siguiente:  
	
	tsc 

Si este no funciona, ponemos el siguiente comando: 

	tsc.cmd 

este va a crear la carpeta Build, lo que haremos sera lo siguiente: 

	cd build 

para poder ingresar a la carpeta Build y lo que haremos despues sera poner este comando: 

	node.exe ./index.js/

Esto se hace para correr el juego. 