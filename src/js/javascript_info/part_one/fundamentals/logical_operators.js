// alert(!null)
// alert(!!null)
//
// alert(!!"hee")

// wtf
// alert(!!!!!!!!!!!!!Boolean(!!!"dd")) // true
//
// let age = prompt("What's your age?", 0);
//
// if (age >= 14 && age <= 90) {
//     alert("Your age is between 14 to 90 inclusively!")
// } else {
//     alert("You are younger than 14 or older than 90")
// }
//
// if (age > 14 && age < 90) alert("Between 14 and 90")
// if (!(age <= 14) && !(age >= 90)) alert("again")
//
let username = prompt("The username please:")

if (username === "Admin") {
    let password = prompt("Now the password:")

    if (password === "TheMaster") {
        alert("Welcome Master!")
        // the long way. also it does not handle an escape event
    } else if (password === "" || password === "esc" || password === "ESC" || password === "Esc") {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
// the short way. escape is handled here with null
} else if (username === "" || username === null) {
    alert("Canceled")
} else {
    alert("I don't know you")
}