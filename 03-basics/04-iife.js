// Immediately invoked function expression

(function chai() {
    console.log(`DB CONNECTED`);
  })();

( (name) => {
    console.log(`DB CONNECTED TWO ${name} `)  // global scope ke pollution se problem hoti hai, global scope ke pollution ko hatane ke liya ya kam karne ke liya iife used karte hain
})("roshan");