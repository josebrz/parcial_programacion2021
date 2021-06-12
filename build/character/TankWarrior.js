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
var TankWarrior = /** @class */ (function (_super) {
    __extends(TankWarrior, _super);
    function TankWarrior() {
        var _this = _super.call(this, 150, 25, 'MagicWarrior') || this;
        _this.armor = 50;
        return _this;
    }
    TankWarrior.prototype.attack = function (personaje) {
        var attack = 0;
        if (personaje.constructor.name != this.weakness) {
            attack = this.weapon.basicAttack();
            attack += this.attackPower;
        }
        else {
            attack = this.weapon.basicAttack();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFua1dhcnJpb3IuanMiLCJzb3VyY2VSb290IjoiLi9pbmRleC50cy8iLCJzb3VyY2VzIjpbImNoYXJhY3Rlci9UYW5rV2Fycmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0M7QUFJdEM7SUFBa0MsK0JBQVM7SUFHdkM7UUFBQSxZQUNJLGtCQUFNLEdBQUcsRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDLFNBRWpDO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBQ3BCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sU0FBb0I7UUFDdkIsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBQztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM5QjthQUNHO1lBQ0EsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNNLDRCQUFNLEdBQWIsVUFBYyxZQUFvQjtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFrQyxxQkFBUyxHQXdCMUM7QUF4Qlksa0NBQVcifQ==