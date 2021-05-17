const a = [4, 5];
const b = [1, 2, 3, 4];
const c = [99, 77, 55, 33, 22, 11, -11, -22, -33];
const d = [-17, 55, 4, 5];
const e = [-17, 55, 1, 2, 3, 4];
const f = [-17, 55, 99, 77, 55, 33, 22, 11, -11, -22, -33];

function arraySuma(narys) {
    return narys[0] + narys[narys.length-1];
}

console.log(arraySuma(a));
console.log(arraySuma(b));
console.log(arraySuma(c));
console.log(arraySuma(d));
console.log(arraySuma(e));
console.log(arraySuma(f));