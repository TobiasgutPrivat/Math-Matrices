type Vector<N extends number,T> = [T, ...T[]] & { length: N };

type Matrix<M extends number, N extends number> = Vector<M, Vector<N,number>>;

// Usage
const v1: Vector<1,number> = [1]; // ✅ OK
const v2: Vector<2,number> = [1, 2]; // ✅ OK

const m2x2: Matrix<2, 2> = [
  [1, 2],
  [3, 4]
]; // ✅ OK

const wrong: Vector<2,number> = [1]; // ❌ Type error (length mismatch)
