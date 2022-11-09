const arr = [2, 8, 15, 4];
//Longhand
const maxNumber = arr.reduce((max, current) => {
  return max > current ? max : current;
});
// Shorthand
Math.max(...arr); // 15
Math.min(...arr); // 2
