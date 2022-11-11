const restaurant = {
  name: 'Classico Italiano',
  menu: ['Garlic', 'Bread', 'Salad', 'Pizza', 'Pasta'],
  openingHours: {
    friday: { open: 11, close: 24 },
    saturday: { open: 12, close: 23 },
  },
};

// LONGHAND
console.log('Value of friday in restaurant: ', restaurant.openingHours.friday);
console.log('Value of name in restaurant: ', restaurant.name);

// SHORTHAND
const { name, openingHours } = restaurant;
const { openingHours: { friday } } = restaurant;

const { openingHours: { friday: { open } } } = restaurant;

console.log(name, friday, open);
