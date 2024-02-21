
// Test for quality and inquality with string
const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2);
console.log(string1 !== string2);

// Test using the lower Case function
const upperCaseString: string = "HELLO";

console.log(upperCaseString.toLowerCase() === "hello");

// Numerical tests
const num1 : number = 5;
const num2 : number = 10;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Tests using the "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2);
console.log(condition1 || condition2);

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const itemToCheck: number = 3;

console.log(array.includes(itemToCheck));

// Test whether an item is not in an array
const itemNotInArray: number = 6;

console.log(!array.includes(itemNotInArray));