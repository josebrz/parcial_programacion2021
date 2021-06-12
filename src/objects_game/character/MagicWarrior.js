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
exports.MagicWarrior = void 0;
var Character_1 = require("./Character");
var Wand_1 = require("../weapon/Wand");
var MagicWarrior = /** @class */ (function (_super) {
    __extends(MagicWarrior, _super);
    function MagicWarrior() {
        var _this = _super.call(this, 1750, 800, 1000, 'MeleeWarrior') || this;
        _this.wand = new Wand_1.Wand();
        return _this;
    }
    MagicWarrior.prototype.addWeapon = function (weapon) {
        throw new Error('Method not implemented.');
    };
    MagicWarrior.prototype.attack = function (personaje) {
        var attack;
        if (personaje.constructor.name != this.weakness) {
            attack = this.wand.basicAttack();
            attack += this.attackPower;
        }
        else {
            attack = this.wand.basicAttack();
            attack += this.attackPower / 1.5;
        }
        return attack;
    };
    MagicWarrior.prototype.defend = function (attackPoints) {
        throw new Error("Method not implemented.");
    };
    return MagicWarrior;
}(Character_1.Character));
exports.MagicWarrior = MagicWarrior;
