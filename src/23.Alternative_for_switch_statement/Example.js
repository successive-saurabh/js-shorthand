let fruit = 'strawberries';

// long hand
switch (fruit) {
  case 'apples':
    console.log('Apples');
    break;
  case 'oranges':
    console.log('Oranges');
    break;
  default:
    console.log('Unknown fruit'); // Logs: 'Unknown fruit'
}

// short hand
const logFruit = {
  'apples': () => console.log('Apples'),
  'oranges': () => console.log('Oranges'),
  'default': () => console.log('Unknown fruit')
};

(logFruit[fruit] || logFruit['default'])(); // Logs: 'Unknown fruit'