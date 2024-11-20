const score = 400

// console.log(score);

// console.log(typeof score);

const balance = new Number(400)

// console.log(typeof balance);  //object 

// console.log(balance);

// console.log(balance.toFixed(2));  // this method fixed the number by 2 after the dot(.) 

// console.log(balance.toString()); //convert the number to string

// console.log(balance.toString().length); //after converting the number into string we can find the length of that number


const otherNumer = 123.8966

// console.log(otherNumer.toPrecision(4));  // this method precise the given value using the given precision number. It looks the number from the starting and given the value.
 
const hundreds = 100000

// console.log(hundreds.toLocaleString("en-IN"));  // 1,00,000



// ********************Maths*********************************************

// console.log(Math);

// console.log(Math.abs(-5));

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2))

// console.log(Math.floor(4.6));

console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1) + min))

