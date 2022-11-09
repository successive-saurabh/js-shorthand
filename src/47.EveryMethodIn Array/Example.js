const arr = [1, 2, 3, 4];

//Longhand
arr.every(function (element) {
  if (element % 2 === 0) {
    return true;
  }
  return false;
});

// Shorthand

arr.every((element) => element % 2 === 0);

const isEven = (item) => item % 2 === 0;
arr.every(isEven);
