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
exports.Hammer = void 0;
var Weapon_1 = require("./Weapon");
var Hammer = /** @class */ (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        return _super.call(this, 2000, 2300) || this;
    }
    Hammer.prototype.basicAttack = function () {
        this.durability -= 30;
        return this.attackPower;
    };
    Hammer.prototype.specialAttack = function () {
        this.durability -= 200;
        return this.attackPower + Math.random() * 220;
    };
    return Hammer;
}(Weapon_1.Weapon));
exports.Hammer = Hammer;
