// Now we are Discussing about the Date and Time Methods and Properties :

// 1. Create the Date Object
let now = new Date();
console.log(now);

// 2. For getting the information from the data
// Methods of Date 

// a. getFullYear(): give the year
console.log(now.getFullYear())

// b. getMonth(): give the month number by 0-11 based numering
console.log(now.getMonth())

// c. getDate(): give the date of the data
console.log(now.getDate())

// d. getDay(): give the day number from 1 to 7
console.log(now.getDay())


// Methods for Time

// a. getHours(), getMinutes(), getSeconds(), for getting minutes , hours , seconds
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// b. getTime(): ye hume 1 January 1970 se lekar ajj tk ka exact timestamp de deta ha  in miliseconds
console.log(now.getTime())

// Methods for setting the Date and Time 

// a. setFullYear(): ye year set kr deta ha
console.log(now.setFullYear(2020))