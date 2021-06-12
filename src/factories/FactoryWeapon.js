"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryWeapon = void 0;
var Hammer_1 = require("../objects_game/weapon/Hammer");
var Sword_1 = require("../objects_game/weapon/Sword");
var Wand_1 = require("../objects_game/weapon/Wand");
var FactoryWeapon = /** @class */ (function () {
    function FactoryWeapon() {
    }
    FactoryWeapon.create = function (type) {
        if (type === "Hammer") {
            return new Hammer_1.Hammer();
        }
        else if (type === "Sword") {
            return new Sword_1.Sword();
        }
        else if (type === "Wand") {
            return new Wand_1.Wand();
        }
        else {
            throw new Error("Error type");
        }
    };
    return FactoryWeapon;
}());
exports.FactoryWeapon = FactoryWeapon;
