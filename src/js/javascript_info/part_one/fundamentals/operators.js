// Unary Operator with 1 operand

let x = 1;
x = -x;
alert("x = " + x);

// Binary Operator with 2 operands

let z = 1, y = 2;

alert("y - z = " + z);

alert("1" + 2); // 12
alert (2 + "1") // 21

// Same as in Java. Depending on whether the string is first or appearing later, the
// operation works differently

alert(2 + 2 + "1"); // 41, not 221
alert("1" + 2 + 2) // 122, not 14

// The binary + is the ONLY operator that supports strings in such a way.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

alert(6 + "2") // 62
alert( 6 - "2"); // 4, converts "2" to a number

alert("6" / "2") // 3, converts both operands to numbers

/*  The plus + exists in two forms:
    the binary form that we used above and the unary form.

    The unary plus or, in other words,
    the plus operator + applied to a single value,
    doesn’t do anything to numbers.

    But if the operand is not a number,
    the unary plus converts it into a number.*/

let g = 1;
alert(+g) // 1

let h = -2;
alert(+h) // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

// It does the same thing as Number() but shorter

let apples = "2";
let bananas = "3";

alert(apples + bananas); // 23 bc the binary + concatenates strings

// This is the same as alert(Number(apples) + Number(bananas))
// Note the operator precedence
alert(+apples + +bananas) // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// Chain Assigning

// l = 2 + 2 = 4
// k = l
// j = k

let j, k, l;
j = k = l = 2 + 2;
alert(j) // 4
alert(k) // 4
alert(l) // 4

// Modify-in-place like += -= *= /= like Java

// Pre-/Post increment/-decrement like Java

// Bitwise operators like Java

// Comma operator

// We can evaluate several expressions but only the result of the last one is returned

// 1+2 is evaluated but the result is thrown away. 3+4 is evaluated and returned
// , has lower precedence than =
let commaOperator = (1 + 2, 3 + 4) // 7
alert("Comma Operator Result: " + commaOperator)

// more useful example
// this is unreadable by nature...
// multiple operations in one line
for (i1 = 1, i2 = 2, i3 = i1 * i2; i1 < 10; i1++) {
    alert("LOL ")
}