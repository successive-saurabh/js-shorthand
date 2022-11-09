function x() {
  console.log('x');
}

function y() {
  console.log('y');
}

let z = 3;
if (z === 3) {
  x();
} else {
  y();
}

// ---------------------- SHORTHAND ----------------------

(z === 3 ? x : y)();

// LIMITATION
// If we need to send different arguement to function then it will not work
// For this we need put function call paranthesis with each one

(z === 3 ? x() : y());