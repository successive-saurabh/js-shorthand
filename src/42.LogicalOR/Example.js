//Longhand
let imagePath;
let path = getImagePath();
if (path !== null && path !== undefined && path !== '') {
  imagePath = path;
} else {
  imagePath = 'default.jpg';
}

//Shorthand1
let imagePath1 = getImagePath() || 'default.jpg';
//Shorthand2
let imagePath2 = getImagePath() ?? 'default.jpg';
