"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(attackPower, durability) {
        this.attackPower = attackPower;
        this.durability = durability;
    }
    Weapon.prototype.attack = function () {
        return 0;
    };
    return Weapon;
}());
exports.Weapon = Weapon;
