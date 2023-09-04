"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = void 0;
function sub(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    return a - b;
}
exports.sub = sub;
//# sourceMappingURL=subtract.js.map