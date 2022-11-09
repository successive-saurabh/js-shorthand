//Longhand
function getPrice(item) {
  if (item === 'Burger') {
    return 200;
  } else if (item === 'Pizza') {
    return 500;
  } else if (item === 'Sandwich') {
    return 400;
  }
}
getPrice('Burger');

//Shorthand
const foodMap = {
  Burger: 200,
  Pizza: 500,
  Sandwich: 400,
};

function getPrice1(item) {
  return foodMap[item];
}

getPrice1('Sandwich');
