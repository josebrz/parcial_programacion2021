"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Parcial de programacion. Alumnos: Conil Nicolas, Brizuela José, Catalano Nico Puto
var MagicWarrior_1 = require("./character/MagicWarrior");
var MeleeWarrior_1 = require("./character/MeleeWarrior");
var TankWarrior_1 = require("./character/TankWarrior");
var readline = __importStar(require("readline"));
// const arma = new Weapon(50, 4);
// const mago = new MagicWarrior()
// const cuerpoAcuerpo = new MeleeWarrior();
// const tanque = new TankWarrior();
// tanque.attack(mago)
// tanque.attack(cuerpoAcuerpo)
console.log("\t-----------------------------------");
console.log("\t------ SUPER CESIT GAME  ----------");
console.log("\t-----------------------------------");
var warrior;
var question1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Por favor eleguir un personaje. Ingresar solo el nº");
question1.question("1 - Magic Warrior\n2 - Melee Warrior\n3 - Tank Warrior\n", function (answer) {
    switch (answer.toLowerCase()) {
        case "1":
            warrior = new MagicWarrior_1.MagicWarrior();
            question2asinc();
            break;
        case "2":
            warrior = new MeleeWarrior_1.MeleeWarrior();
            question2asinc();
            break;
        case "3":
            warrior = new TankWarrior_1.TankWarrior();
            question2asinc();
            break;
        default:
            console.log("Invalid answer!");
    }
    question1.close();
});
var question2asinc = function () {
    console.log(warrior);
    var question2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("Por favor eleguir un personaje. Ingresar solo el nº");
    question2.question("1 - Magic Warrior\n2 - Melee Warrior\n3 - Tank Warrior", function (answer) {
        switch (answer.toLowerCase()) {
            case "1":
                console.log("Super!");
                break;
            case "2":
                console.log("Sorry! :(");
                break;
            case "3":
                console.log("Sorry! :(");
                break;
            default:
                console.log("Invalid answer!");
        }
        question2.close();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9pbmRleC50cy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUFxRjtBQUNyRix5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELHVEQUFxRDtBQUdyRCxpREFBcUM7QUFFckMsa0NBQWtDO0FBRWxDLGtDQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QiwrQkFBK0I7QUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFFckQsSUFBSSxPQUFrQixDQUFDO0FBRXZCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDdkMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN2QixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFDbkUsU0FBUyxDQUFDLFFBQVEsQ0FBQywwREFBMEQsRUFBRSxVQUFDLE1BQU07SUFDcEYsUUFBTyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxHQUFHO1lBQ04sT0FBTyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFBO1lBQzVCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLE1BQU07UUFDUixLQUFLLEdBQUc7WUFDTixPQUFPLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7WUFDNUIsY0FBYyxFQUFFLENBQUM7WUFDakIsTUFBTTtRQUNSLEtBQUssR0FBRztZQUNOLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQTtZQUMzQixjQUFjLEVBQUUsQ0FBQztZQUNqQixNQUFNO1FBQ1I7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDbEM7SUFDRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLGNBQWMsR0FBRztJQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXBCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDbkUsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3REFBd0QsRUFBRSxVQUFDLE1BQU07UUFDbEYsUUFBTyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDM0IsS0FBSyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRVQsQ0FBQyxDQUFBIn0=