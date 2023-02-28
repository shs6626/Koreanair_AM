console.log("Hello ARS");
let total = 1+3;

if (1+1 ===2) {
    console.log("Math works!")
}

if (1+2 ===2) {
    console.log("Math works!")
}

let random = Math.random();

if (random < 0.5) {
    console.log("less than 0.5!")
    console.log(random)

}

if (random >= 0.5) {
    console.log("greater than 0.5!")
    console.log(random)

}

//else-if 구문

const age = 3;

if (age < 5) {
    console.log("baby")

} else if (age < 10) {
    console.log("child")

}else if (age <65) {
    console.log("adult")
}

//else 구문

// const dayOFWeek = prompt("enter a day").toLowerCase();

// if (dayOFWeek === "monday") {
//     console.log("bad")
// } else if (dayOFWeek === "saturday") {
//     console.log("good")

// } else {
//     console.log("soso")
// }

//논리함수 and

const password = prompt("password")
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!")
} else {
    console.log("Incorrect")
    
}