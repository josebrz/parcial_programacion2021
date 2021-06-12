"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TankWarrior = void 0;
var Character_1 = require("./Character");
var Hammer_1 = require("../weapon/Hammer");
var TankWarrior = /** @class */ (function (_super) {
    __extends(TankWarrior, _super);
    function TankWarrior() {
        var _this = _super.call(this, 3500, 600, 5000, 'MagicWarrior') || this;
        _this.hammer = new Hammer_1.Hammer();
        return _this;
    }
    TankWarrior.prototype.addWeapon = function (weapon) {
        throw new Error('Method not implemented.');
    };
    TankWarrior.prototype.attack = function (personaje) {
        var attack = 0;
        if (personaje.constructor.name != this.weakness) {
            attack = this.hammer.basicAttack();
            attack += this.attackPower;
        }
        else {
            attack = this.hammer.basicAttack();
            attack += this.attackPower / 2;
        }
        return attack;
    };
    TankWarrior.prototype.defend = function (attackPoints) {
        throw new Error("Method not implemented.");
    };
    return TankWarrior;
}(Character_1.Character));
exports.TankWarrior = TankWarrior;
