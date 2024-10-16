let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value) // string

alert("6" / "2"); // 3, strings are converted to numbers

let str = "123";
alert(typeof str) // string

let num = Number(str) // becomes a number 123
alert(typeof num) // number

let age = Number("this is just a string without any numbers")
alert(age); // NaN

let age2 = Number("this is probably n0t g0nn4 w0rk")
alert(age2); // Still NaN

/*
Numeric conversion rules:

Value: 	            Becomes…
undefined: 	        NaN
null: 	            0
true and false: 	1 and 0
string 	Whitespaces (includes spaces, tabs \t, newlines \n etc.)
                    from the start and end are removed.
                    If the remaining string is empty, the result is 0.
                    Otherwise, the number is “read” from the string.
                    An error gives NaN.*/


// Boolean conversion

/*The conversion rule:

    Values that are intuitively “empty”, like 0, an empty string,
    null, undefined, and NaN, become false.

    Other values become true.*/

alert(Boolean(1)) // true
alert(Boolean(0)) // false
alert(Boolean("hello")) // true
alert(Boolean("")) // false

alert(Boolean("0")) // true
alert(Boolean(" ")) // also true bc non-empty string


// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.
