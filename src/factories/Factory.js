"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var FactoryCharacter_1 = require("./FactoryCharacter");
var FactoryWeapon_1 = require("./FactoryWeapon");
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.create = function (typeFactory, typeObject) {
        if (typeFactory === "Character") {
            return FactoryCharacter_1.FactoryCharacter.create(typeObject);
        }
        else if (typeFactory === "Weapon") {
            return FactoryWeapon_1.FactoryWeapon.create(typeObject);
        }
        else {
            throw new Error("Error type");
        }
    };
    return Factory;
}());
exports.Factory = Factory;
