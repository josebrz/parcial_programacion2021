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
exports.MeleeWarrior = void 0;
var Character_1 = require("./Character");
var Sword_1 = require("../weapon/Sword");
var MeleeWarrior = /** @class */ (function (_super) {
    __extends(MeleeWarrior, _super);
    function MeleeWarrior() {
        var _this = _super.call(this, 1300, 1500, 1000, 'TankWarrior') || this;
        _this.sword = new Sword_1.Sword();
        return _this;
    }
    MeleeWarrior.prototype.addWeapon = function (weapon) {
        throw new Error('Method not implemented.');
    };
    MeleeWarrior.prototype.attack = function (personaje) {
        var attack;
        if (personaje.constructor.name != this.weakness) {
            attack = this.sword.basicAttack();
            attack += this.attackPower;
        }
        else {
            attack = this.sword.basicAttack();
            attack += this.attackPower / 3;
        }
        return attack;
    };
    MeleeWarrior.prototype.defend = function (attackPoints) {
        throw new Error("Method not implemented.");
    };
    return MeleeWarrior;
}(Character_1.Character));
exports.MeleeWarrior = MeleeWarrior;
