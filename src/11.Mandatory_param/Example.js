function foo(bar) {
  if (bar === undefined) {
      throw new Error(`Missing parameter`)
  }
  console.log('foo function param ::', bar);
  return bar;
}
// foo();

// ---------------------- SHORTHAND ----------------------

const mandatory = (str) => {
  throw new Error(`${str} missing parameter`)
}

const boo = (bar = mandatory('bar')) => {
  console.log('boo function param ::', bar);
  return bar;
}

// boo('bar')