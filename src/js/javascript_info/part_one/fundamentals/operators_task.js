// 1.

// let a = 1, b = 1;
//
// let c = ++a;
// let d = b++;
//
// // a = 2, b = 2, c = 2, d = 1
//
// let a = 2;
// let x = 1 + (a *= 2);

// a = 4, x = 5

// 2.

/*
What are results of these expressions?

"" + 1 + 0 -> 10
"" - 1 + 0 -> -1
true + false -> 1
6 / "3" -> 2
"2" * "3" -> 6
4 + 5 + "px" -> 9px
"$" + 4 + 5 -> $45
"4" - 2 -> 2
"4px" - 2 -> NaN
"  -9  " + 5 -> -95 not correct --> "  -9  5"
"  -9  " - 5 -> -14
null + 1 -> null not correct --> 1
undefined + 1 -> undefined not correct --> null
" \t \n" - 2 -> NaN --> not correct --> -2
*/

// Solution and explanation

/*
1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1",
   and then we have "1" + 0, the same rule is applied.
2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
3. The addition with a string appends the number 5 to the string.
4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
5. null becomes 0 after the numeric conversion.
6. undefined becomes NaN after the numeric conversion.
7. Space characters are trimmed off string start and end when a string is converted to a number.
   Here the whole string consists of space characters, such as \t, \n and a “regular” space between them.
   So, similarly to an empty string, it becomes 0.
*/

// 3.

let c = prompt("First number: ", 1);
let d = prompt("Second number: ", 2);

alert(c + d); // 12
alert(+c + +d); // 3