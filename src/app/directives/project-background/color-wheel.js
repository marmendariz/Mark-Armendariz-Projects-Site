"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var ColorWheel = /** @class */ (function () {
    function ColorWheel() {
        this.colorWheel = [
            "rgba(12,78,138,0.55)",
            //"rgba(255,255,255,0.55)", //white,
            "rgba(0,    0,  0,0.55)"
        ];
    }
    ColorWheel.prototype.getColorAtIndex = function (i) {
        return this.colorWheel[i];
    };
    ColorWheel.prototype.getNumberOfColors = function () {
        return this.colorWheel.length;
    };
    return ColorWheel;
}());
exports.ColorWheel = ColorWheel;