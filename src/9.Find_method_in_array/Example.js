// longhand
const cars = [
  { make: 'toyota', model: 'corolla' },
  { make: 'ford', model: 'falcon' },
  { make: 'audi', model: 'a4' },
];

function findModel(name) {
  for (let i = 0; i < cars.length; ++i) {
    if(cars[i].make === name) {
      return cars[i];
    }
  }
}
const result = findModel('ford');
console.log(result);

// shorthand
const cars2 = [
  { make: 'toyota', model: 'corolla' },
  { make: 'ford', model: 'falcon' },
  { make: 'audi', model: 'a4' },
];
const output = cars2.find((car) => car.make === 'ford');
console.log(output);