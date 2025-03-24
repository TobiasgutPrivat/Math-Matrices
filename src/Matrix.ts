import Vector from "./Vector";

export default class Matrix<M extends number, N extends number> extends Array<Vector<N>> {
    constructor(...rows: (number[])[]) {
        console.log(rows);
        super(...rows.map(row => new Vector<N>(...row)));
        Object.setPrototypeOf(this, Matrix.prototype); // Ensure correct prototype
        if (this.length !== rows.length) {
            throw new Error(`Matrix must have exactly ${rows.length} rows`);
        }
    }
  
    add(other: Matrix<M, N>): Matrix<M, N> {
        return new Matrix<M, N>(...this.map((row, i) => row.add(other[i])));
    }
  
    toString(): string {
        return `Matrix(\n ${this.join("\n  ")}\n)`;
    }
}
  
// Overloaded function to accept raw arrays and convert them automatically
function matrixFunc(m: Matrix<2, 2> | number[][]) {
    if (!(m instanceof Matrix)) m = new Matrix<2, 2>(...m); // Convert raw array
    console.log("Matrix received:\n", m.toString());
}

// ✅ Implicit conversion now works!
matrixFunc([
    [1, 2],
    [3, 4]
]); // Works

matrixFunc(new Matrix<2, 2>(
    new Vector<2>(1, 2),
    new Vector<2>(3, 4)
)); // Works
