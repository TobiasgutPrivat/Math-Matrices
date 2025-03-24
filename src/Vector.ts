export default class Vector<N extends number> extends Array<number> {
  constructor(...values: number[]) {
    super(...values);
    Object.setPrototypeOf(this, Vector.prototype); // Ensure correct prototype
    if (this.length !== values.length) {
      throw new Error(`Vector must have exactly ${values.length} elements`);
    }
  }

  add(other: Vector<N>): Vector<N> {
    return new Vector<N>(...this.map((v, i) => v + other[i]));
  }

  scale(scalar: number): Vector<N> {
    return new Vector<N>(...this.map((v) => v * scalar));
  }

  toString(): string {
    return `Vector(${this.join(", ")})`;
  }
}

// Overloaded function to accept raw arrays and convert them automatically
function someFunc(v: Vector<3> | number[]) {
  if (!(v instanceof Vector)) v = new Vector(...v); // Convert raw array
  console.log("Received:", v.toString());
}

// ✅ Implicit conversion now works!
someFunc([0, 1, 2]); // Works
someFunc(new Vector<3>(0, 1, 2)); // Works
