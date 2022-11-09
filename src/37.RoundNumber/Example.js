let a = 98.78;
Math.round(a);
a = (a + 0.5) | 0;
console.log(a);

Math.round(-a);
a = (-a - 0.5) | 0;
console.log(a);
