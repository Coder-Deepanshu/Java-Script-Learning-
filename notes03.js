// 2. Numbers :
const num1 = 12; // Declaration of numbers
// In java script has no data type like float

// Important Methods in Java Script of Number
// 1. toFixed(): ak decimal ke bad kitne digits show krne ha iske liye use hota ha 
// number ko round off krne ke liye kam ata ha 
const num2 = 19.45767999999897
console.log(num2); // Before appling method
console.log(num2.toFixed(4)) // After appling method

// 2. toString(): ye kam ata ha Number ko String me convert krne ke liye :
console.log(typeof num2) // Before
console.log(typeof num2.toString()) // After

// 3. toLocalString(): ye bade numbers ko ya currency ko formate krne ke liye kam ata ha , ye badi length ke number ko readable bna ta ha 
const num3 = 100000000000;
console.log(num3.toLocaleString()); // by default
console.log(num3.toLocaleString("en-IN")); // formate into indian currency