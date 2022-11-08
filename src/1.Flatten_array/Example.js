const arr = [1, [2, 3], [4, [5]], 6, 7];
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(Infinity));