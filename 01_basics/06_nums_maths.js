const score = 400
// console.log(score);

const balance = new Number(100) //number as a object define krne ka tarika
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); decimal ko 2 digit tak krdega roundoff krke

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); decimal ke phle wale aur baad wale dono milake 4 digits ka number dega

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); indian form of jnumber mei represent krdega

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// math.random()->0 to 1 
// math.random()*10-> 1 place shifted to left
//math.floor()-> lower bound value
//adding (min)-> minimum isse jyada chaiye
//(max - min + 1) range decide krne ke liye
