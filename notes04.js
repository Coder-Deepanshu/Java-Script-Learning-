// Now we are discuss about the java Script by default Maths Library

//1. PI : property , pi ki value deta ha 
console.log(Math.PI);

//2. For Round off the numbers
// a. round(): Normal Round of 
const num1 = 6.2;
const num2 = 9.8;
console.log(Math.round(num1));
console.log(Math.round(num2));

// b. ceil(): for converting number into lowest integer value 
console.log(Math.ceil(num1));

// c. floor(): for converting the number the into greatest integer value
console.log(Math.floor(num1));

// 3. for generating the random values (super important)
// Math.random(): ye random values generate krne ke liye use hota ha 0 se 1 tak
console.log(Math.random())

console.log(Math.floor(Math.random() * 6) + 1);
// generating value 1 to 6 

// 4. Other methods
// a. Math.min() and Math.max(): diye gaye numbers me se sabse chota hor bada values find krna
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(5,6,7,2,3,4));

// b. Math.abs(): negative values ko positive me convert krne ke liye , jase maths me modulus function hota ha 
console.log(Math.abs(-12));

// c. Math.pow(): power krne ke liye use hota ha 
console.log(Math.pow(2,3)); // means 2 ki power 3
