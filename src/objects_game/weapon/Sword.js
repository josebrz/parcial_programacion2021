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
exports.Sword = void 0;
var Weapon_1 = require("./Weapon");
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        return _super.call(this, 3100, 2000) || this;
    }
    Sword.prototype.basicAttack = function () {
        this.durability -= 50;
        return this.attackPower;
    };
    Sword.prototype.specialAttack = function () {
        this.durability -= 200;
        return this.attackPower + Math.random() * 250;
    };
    return Sword;
}(Weapon_1.Weapon));
exports.Sword = Sword;
