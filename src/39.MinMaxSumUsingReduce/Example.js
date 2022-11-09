const array = [5, 4, 7, 8, 9, 2];
//Sum
array.reduce((a, b) => a + b);
// Output: 35
//Max
array.reduce((a, b) => (a > b ? a : b));
// Output: 9
//Min
array.reduce((a, b) => (a < b ? a : b));
