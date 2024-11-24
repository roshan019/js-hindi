
// const tinderUser = new Object()  //singleton object

const tinderUser2 ={}   // Non-singleton object

tinderUser2.id = "123abd"
tinderUser2.name = "roshan"
// console.log(tinderUser);
// console.log(tinderUser2);

// const regularUser ={
//     email: "roshan@gmail.com",
//     fullname:{
//         userFullname: {
//             firstname: "roshan",
//             lastname: "budha"
//         }
//     }
// }

// console.log(regularUser.fullname.userFullname.lastname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2} // not correct way to used (marge together)

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users ={
     {
        
     }
}
