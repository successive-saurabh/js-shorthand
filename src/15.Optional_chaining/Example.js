const getUser = undefined;

// Calling a undefined function will throw run time error
getUser();

// We can handle this way
if (getUser) {
  getUser();
}

// ---------------------- SHORTHAND ----------------------
// Function will get call only if it is not null or undefined

getUser?.();
