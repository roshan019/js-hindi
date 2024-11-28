 const user = {
    username: "roshan",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }


 }

//  user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Rosahn"
//     console.log(this)
//     console.log(this.username);  // this keyword cannot access to the function
    
// }

// const chai = () => {
//     let username = "Rosahn"
//     console.log(this)
//     console.log(this.username);  // this keyword cannot access to the function
    
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  ({username: "roshan"})


// console.log(addTwo(3,5));
