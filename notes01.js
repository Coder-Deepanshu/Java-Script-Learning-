// types of variable
let name1 = "Deepanshu";
var name2 = "Yashika"; // variable global scope
const name3 = "Manu"; // constants are declared once, and used many times.
name4 = "Mayank"; // This is another to declare variables in javascript, but it is not good.

// console.log(name1); // by this we can see the output of single variable.
// console.table([name1, name2, name3, name4]); // by this we can see output of many variables in table

// data types
let name = "Deepanshu"; // string
let age = 18; // number
let adult = true; // boolean (true/false)
let location; // it give undefined / it is a undefined data type
let address = null; // it assign null to variable / it is a object data type
// console.table([typeof name, typeof age, typeof adult, typeof location, typeof address]) // first way of getting data type of any variable or value
// console.log(typeof(adult)) // also as a method we can use typeof 

// conversion of data types
// we convert one data type into another by using that functions:
// console.log(Number(name)); // it give Nan which means (not a number)
// console.log(Boolean(location)); // it is use for converting in true or false value
// console.log(String(age)) // it is use to converting any value into string 

// string to number confusing conversion
// console.log(1 + 1 + "2");
// console.log("1" + 1 + 2);

// prefix and postfix plus and minus operator
let x = 5;
let y = ++x; // firstly variable value changed and then used , phle x 6 ban gya fr y 6 ban gaya
// console.table([x , y]);

let w = 5
let z = w++; // firstly variable value used and then changed, phle w ki value use hui fr w ki value change ho gai
// console.table([w, z])

