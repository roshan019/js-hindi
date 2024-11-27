// scope

let a = 11

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const usserName = "roshan"

    function two(){
        const website = "youtube"
        console.log(usserName);
        
    }
    // console.log(website);
    // two()
    
}

// one()

if (true) {
    const username = "roshan"
    if (username === "roshan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


function addOne(num1){
    return num1 + 1;
}

addOne(5)

const addTwo = function(num1){
    return num1 + 2
}

addTwo(5)