"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mul = void 0;
function mul(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    return a * b;
}
exports.mul = mul;
//# sourceMappingURL=multiply.js.map