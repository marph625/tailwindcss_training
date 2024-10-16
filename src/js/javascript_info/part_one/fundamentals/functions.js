let age = 19;

function checkAge(age) {
    if (age > 18) {
        alert("true")
        return true;
    }
    return confirm("Did parents allow you?")
}

// rewrite with || and ?

function checkAgeOr(age) {
    return (age > 18) || confirm("Did parents allow you?")
}

function checkAgeWhy(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}

//checkAge(age)
//checkAgeOr(age)
//checkAgeWhy(age)

function min(a, b) {
    return (a < b) ? a : b;
}

// alert(min(2, 5))
// alert(min(3, -1))
// alert((min(1, 1)))

function pow(a, b) {
    return a ** b;
}

// alert(pow(3, 3))

let funcVar = function(){
    alert("Hi")
}

let copy = funcVar;

// alert(funcVar);
// alert(copy);

// Callback functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOK() {
    alert("You agreed")
}

function showCancel() {
    alert("You do not agree")
}

// usage: functions showOk, showCancel are passed as arguments to ask

// ask("Do you agree?", showOK, showCancel)

// shorter version:

function aks(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

// Here the functions are declared inside the parameter list
// As they need no name they are called anonymous functions

// aks(
//     "Do you agree?",
//     function () {alert("Agreed")},
//     function () {alert("Noooooo")}
// )

// Arrow functions / lambdas

//let age2 = prompt("Age?", 0);

// let welcome = (age2 > 18) ?
//     () => alert("Greetings, fellow Adult!") :
//     () => alert("Greetings, kid.")

//welcome();

let calcSum = (a, b) => {
    let result = a + b;
    return result;
}

//alert(calcSum(1, 4))

// Task

let answer = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

answer(
    "Do you agree?",
     () => {alert("You agreed")},
     () => {alert("You heavily disagreed")}
)