export function div(a: number, b: number): number {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Both arguments must be numbers.");
	}
	if (b === 0) {
		throw new Error("Division by zero is not allowed.");
	}
	return a / b;
}
