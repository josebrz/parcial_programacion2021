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
var MeleeWarrior = /** @class */ (function (_super) {
    __extends(MeleeWarrior, _super);
    function MeleeWarrior() {
        return _super.call(this, 200, 45, 'TankWarrior') || this;
    }
    MeleeWarrior.prototype.attack = function (personaje) {
        var attack;
        if (personaje.constructor.name != this.weakness) {
            attack = this.weapon.basicAttack();
            attack += this.attackPower;
        }
        else {
            attack = this.weapon.basicAttack();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVsZWVXYXJyaW9yLmpzIiwic291cmNlUm9vdCI6Ii4vaW5kZXgudHMvIiwic291cmNlcyI6WyJjaGFyYWN0ZXIvTWVsZWVXYXJyaW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFzQztBQUd0QztJQUFrQyxnQ0FBUztJQUV2QztlQUNJLGtCQUFNLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxDQUFDO0lBQ2pDLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsU0FBb0I7UUFDOUIsSUFBSSxNQUFjLENBQUM7UUFDbkIsSUFBRyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzlCO2FBQ0c7WUFDQSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFlBQW9CO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdEJELENBQWtDLHFCQUFTLEdBc0IxQztBQXRCWSxvQ0FBWSJ9