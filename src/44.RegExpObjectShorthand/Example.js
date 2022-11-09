//Longhand
const re = new RegExp(/abc/, 'igm');
const result = re.exec(/abcd/);
console.log(result);

//Shorthand
const result1 = /abc/igm.exec(/abcd/);
console.log(result1);
