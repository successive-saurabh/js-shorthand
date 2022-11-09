let i;
console.log(i); //Undefined
i = i || 0;
i++; //Longhand
i = -~i; //Shorthand

let j;
j = j || 0;
j--; // before
j = ~-j; // after
