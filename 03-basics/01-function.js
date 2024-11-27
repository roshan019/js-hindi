
// function

// function sayMyName(){
//     console.log("R");
//     console.log("O");  //this is a function definition
// }

// sayMyName()



// function addTwoNumbers(num1, num2){   // parameters
//     let result = num1 + num2;
//     return result;
// }

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

const result = addTwoNumbers( 3,5)   // this are arguments

// console.log("result: ", result);


function loginUsermessage(username){
    return `${username} just logged in`
}

// console.log(loginUsermessage("Roshan"))
// console.log(loginUsermessage()); 


function calculateCartPrice(val1, val2, ...num1){
    // this is a rest operator ( ... num1)
    return num1;
}
//  console.log(calculateCartPrice(200, 300, 500));
 
// console.log(calculateCartPrice(200,300,500,2000));

// accessing an object by function
const user = {
    username: "roshan",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and prise is ${anyobject.price}`);
    
}
// handleObject(user);

// accessing and array in fucntion
const myNewArry = [200, 300, 500, 600]

function returnSecondvalue(getArray){
    return getArray[1];
}

// console.log(returnSecondvalue(myNewArry));
