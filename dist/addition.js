"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    return a + b;
}
exports.add = add;
//# sourceMappingURL=addition.js.map