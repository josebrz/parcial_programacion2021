"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryCharacter = void 0;
var MagicWarrior_1 = require("../objects_game/character/MagicWarrior");
var MeleeWarrior_1 = require("../objects_game/character/MeleeWarrior");
var TankWarrior_1 = require("../objects_game/character/TankWarrior");
var FactoryCharacter = /** @class */ (function () {
    function FactoryCharacter() {
    }
    FactoryCharacter.create = function (type) {
        if (type === "MagicWarrior") {
            return new MagicWarrior_1.MagicWarrior();
        }
        else if (type === "MeleeWarrior") {
            return new MeleeWarrior_1.MeleeWarrior();
        }
        else if (type === "TankWarrior") {
            return new TankWarrior_1.TankWarrior();
        }
        else {
            throw new Error("Error type");
        }
    };
    return FactoryCharacter;
}());
exports.FactoryCharacter = FactoryCharacter;
