// let age = prompt('How old are you?', 0);
//
// alert(`You are ${age} years old!`);
//
// let test = prompt("Test");
// alert(test)
// let test2 = prompt("Test", '');
// alert(test2)

let result = confirm("OK -> true | Abbrechen -> false");
alert(result)

// Summary
// alert() shows a message
// prompt() shows a message and expects input. Returns a string or null, when ESC is clicked
// confirm() shows a message and returns a boolean

/*    All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

    There are two limitations shared by all the methods above:

    The exact location of the modal window is determined by the browser. Usually, it’s in the center.
    The exact look of the window also depends on the browser. We can’t modify it.

    That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.*/


// Task: Create a web-page that asks for a name and outputs it.
// See interaction.html

alert("Ok, now seriously. This is a task to ask for a name and output it.")
alert("Ready?")
alert("3")
alert("2")
alert("1")

let userAge = prompt("Assumung you are a tree, how many rings can I count, when I cut you in half?")
alert("Your age: " + userAge)
alert("Oh wait, that was the age...")
let userName = prompt("Assuming you are a tree, how do your little tree-friends call you usually?")
alert(`So your name is ${userName}`)