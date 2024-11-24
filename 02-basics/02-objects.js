// singleton :- if we make froma constructor it become a singleton object
// if we make from different it have a multiple instances;

// object literals

const mySym = Symbol("key1")


// console.log(typeof mySym);

const jsUser = {
    name: "roshan",
    age: 20,
    [mySym]: "mykey1",
    email: "roshanbudha@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "tuesday"]
}
// console.log(jsUser);

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.email = "roshan@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "roshanbudha@gmail.com"

// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());