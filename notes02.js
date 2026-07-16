// JAVA SCRIPT DATA TYPES:
// 1. Strings
const firstName = "Deepanshu"; // String Declaration
// console.log(firstName);

// Strings Methods
// 1. includes() : ye check krta ha kya ak string dusri string ke andur ha ya nhi (ye case sensitive hota ha )
// outcome come in true or false
let text = "Hello Bhaiya"
// console.log(text.includes("Bhaiya"));
// console.log(text.includes("bhaiya"));

// 2. indexOf():
// a. ye 0 based indexing follow krta ha 
// b. ye kisi character ya substring ka pehla index (position) batata hai jahan wo start hota ha
// c. ager ise wo string na mile to ye -1 return kr deta ha 
let anotherText = "java Script";
// console.log(anotherText.indexOf("Script"));
// console.log(anotherText.indexOf("Python"));
// console.log(anotherText.indexOf("script"));
// console.log(anotherText.indexOf("Scripts"));

// 3.startWith() / endWith():
// a. startWith(): check karta ha ki koi string kisi khas letter se ya character se start ho rhi ha ya nhi 
// b. endWith(): check karta ha ki koi string kisi khas letter ya character se end ho rhi ha ya nhi 

// lets take the example
// console.log(anotherText.startsWith("j"));
// console.log(anotherText.endsWith("t"));

// 4. toLowerCase() / toUpperCase:
// a. toLowerCase(): puri string ko small letters me convert kar deta ha 
// b. toUpperCase(): puri string ko big letters me convert kar deta ha 
const anotherName = "Amit Kumar is is is is ";
// console.log(anotherName.toLowerCase());
// console.log(anotherName.toUpperCase());

// 5. trim(): string ke starting aur ending ke be faltu ke spaces ko hta deta ha , bich ke space ko touch bhi nhi karta
const demo = "            Hello World          "
// console.log(demo.trim());

// 6. replaceAll()/ replace()
// a. replace(): kisi word ya character ki pehli occurence ko badal deta ha 
// b. replaceAll(): String mein jahan-jahan wo character ya letter hoga , sabko badal dena
// console.log(anotherName.replace("Amit", "Rajesh"));
// console.log(anotherName.replaceAll("is", "was"));

// 7. slice(): String me se ak tukda kat ke dena jise hum sub-string khte ha , isme hum start aur end index dete ha 
// Note: end wala index exclude hota ha 
console.log(anotherName.slice(0,-5))

// 8. split(): String ko kisi comma space etc ke basis par todta ha hor sub strings ka array create kar deta ha 
let fruits = "Apple, Banana, Mango, Litchi";
console.log(fruits.split(","));

// 9. substring(): ye bhi slice ki trh kam karta ha , but faraq ye ha slice negative values accept kar letaha , ye negative values ko 0 treat karta ha 
console.log(anotherName.substring(0,8));

// 10. charAt(): kisi specific index par kaun sa character baitha hai ye batata ha 
console.log(anotherName.charAt(0)); 

// 11. length: ye ak property ha jo string ki length btati ha means string me kitne characters ha including spaces
console.log(anotherName.length)

// 12. repeat(): ek string ko jitni bar chaho utni bar repeat krke new string bna skte ho
console.log(anotherText.repeat(3));

// 13. match(): ye string ko ek regular expression ke sath match krne ke liye use hota ha ya matches array ko return karta ha 
let demoText = "My lucky number are 7 and 9";
let regx = /[0-9]/g; // sare numbers find krne ke liye regex
console.log(demoText.match(regx));

// 14. padStart() / padEnd():
// a. padStart(): string ke start me tab tak character add krta rehta ha jab tk string di gai length na ho jaye
// b. padEnd(): ye string ke end me add krta ha 
let cardNo = "4512"
console.log(cardNo.padStart(8,"*"))
console.log(cardNo.padEnd(8, "-"));