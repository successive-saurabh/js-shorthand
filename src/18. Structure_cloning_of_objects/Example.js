const myOriginal = {
  someProp: 'with a string value',
  anotherProp: {
    withAnotherProp: 'test',
    andAnotherProp: true
  }
};

const myShallowCopy = { ...myOriginal };

myShallowCopy.anotherProp.withAnotherProp = 'a new value';
console.log(myOriginal.anotherProp.withAnotherProp);
// ^ logs 'a new value'

const myDeepCopy = JSON.parse(JSON.stringify(myOriginal));
myDeepCopy.andAnotherProp.withAnotherProp = 'a new value';
console.log(myOriginal.anotherProp.withAnotherProp);
// test

const myDeepCopy = structuredClone(myOriginal);
myDeepCopy.andAnotherProp.withAnotherProp = 'a new value';
console.log(myOriginal.anotherProp.withAnotherProp);
// test
