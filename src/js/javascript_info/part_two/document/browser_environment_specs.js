function sayHi() {
    alert("Hello");
}

function sayHeight() {
    alert(window.innerHeight)
}

// global functions are methods of the global object
window.sayHi()
window.sayHeight();

document.body.style.background = "red";

setTimeout(() => document.body.style.background = "", 1000)

alert(location.href);
if (confirm("Go to wikipedia?")) {
    location.href = "https://wikipedia.org"
}

for (let node of document.body.childNodes) {
    alert(node);
}

while (elem === elem.parentElement) { // go up until <html>
    alert(elem);
}
