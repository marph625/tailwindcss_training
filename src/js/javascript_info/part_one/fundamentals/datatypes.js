// Numbers

console.log(Infinity)

let message = "hello"
message = 234
message = 23.4
console.log(message)

console.log(1/0) // Infinity
let not_a_number = "h" / 2
console.log(not_a_number) // NaN
console.log(not_a_number * 2) // NaN is sticky
console.log(not_a_number / 0)
console.log(not_a_number ** 0) // The only exception
console.log(not_a_number ** 0 * 2 + 4) // 6

console.log(2**53) // "number" can hold 2**53-1 or -(2**53-1)
console.log(2**53 + 1) // out of "number" range, same number

// "n" at the end declares it as BigInt
const bigInt = 9007199254740993n

console.log(bigInt)

// Strings

// no difference in single and double quotes
let str1 = " there!"
let str2 = 'Hello'

console.log(str2 + str1);

let greeting = str2 + str1;

// Backticks for extended functionality quotes
let phrase = `Obi-Wan says: ${greeting}`

console.log(phrase)

console.log(`1 + 2 = ${1+2}`)

// There is no char type, only strings :(

// Boolean

let bool1 = true;
let bool2 = false;

console.log(1 > 2);

console.log(1 < 2)

// Null - nothing, empty, value unknown

let meaningOfLife = null;

// Undefined - value not assigned

let IDONTNEEDTODEFINETHIS;

console.log(IDONTNEEDTODEFINETHIS)

let number = 10
number = undefined
console.log(number)

// Objects - later, symbol - later

// typeof operator returns a string

console.log("----------------------------")

console.log(typeof undefined) // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2) // null it NOT an object. typeOf is wrong here. It's a well known error chosen to be ignored for compatibility

console.log(typeof alert) // "function"  (3) // duh akshually it says undefined...

// typeof(x) is the same as typeof x in JavaScript

// Tasks

let name = "Ilya";
console.log(`hello ${1}`) // hello 1
console.log(`hello ${"name"}`) // not an error, just a string of "name"
console.log(`hello ${name}`) // hello Ilya

