// long hand
let x = "Hello", y = 55;

const temp = x;
x = y;
y = temp;

console.log("long====",x," ",y);

// short hand
let a = "Hello", b = 55;

[a, b] = [b, a];

console.log("short====",a," ",b);
