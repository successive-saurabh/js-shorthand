function foo(bar) {
  if (bar === undefined) {
      bar = 'foo-bar';
  }
  console.log('foo function param ::', bar);
  return bar;
}
// foo();

// ---------------------- SHORTHAND ----------------------

const boo = (bar = 'boo-bar') => {
  console.log('boo function param ::', bar);
  return bar;
}
//boo()
