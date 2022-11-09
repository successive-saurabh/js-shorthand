// Case 1
let person = {
  name: 'Jim Cowart',
  location: {
    city: { name: 'Chattanooga', population: 167674 },
    state: { name: 'Tennessee', abbreviation: 'TN', population: 6403000 },
  },
  company: 'appendTo',
};

const result = JSON.stringify(person, ['name', 'company'], 4);
console.log(result);

// Case 2
const user = {
  name: 'Bramus',
  password: 'password123',
};

const output = JSON.stringify(user, (key, value) => {
  return key === 'password' ? 'XXXXXXXXXX' : value;
});
console.log(output);

// Case 3
const info = {
  name: 'Pawel',
  friends: ['John', 'Peter', 'Bob'],
};
const response = JSON.stringify(dude, null, 4);
console.log(response);


