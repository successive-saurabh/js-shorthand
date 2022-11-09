const fname = { firstname: 'Abc' };
const lname = { lastname: 'Def' };

const fullname = Object.assign(fname, lname);
console.log(fullname);

// ---------------------- SHORTHAND ----------------------
const fullname1 = { ...fname, ...lname };
console.log(fullname1);