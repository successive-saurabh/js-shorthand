const obj = { a: 1, b: 2, c: 3, d: 4 };

// LONGHAND
delete obj.a;
delete obj.b;
console.log(obj); // { c:3, d: 4 }

// SHORTHAND
const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...newObj } = obj1;
console.log(newObj);  // { C:3, D:4 }

// For Single key Remove
const obj2 = { a: 1, b: 2, c: 3, d: 4 };
const { ['a']: remove, ...newObj1 } = obj2;
console.log(newObj1); // { b:2, c:3, d:4 }