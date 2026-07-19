// Today we are discussing about the arrays

// Declaration of Array
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1,2,3,4,5);

console.log(array1);
console.log(array2);

// java script array follow the shallow copy and deep copy

// a. shallow copy : isme top-level values copy ho jati ha, lekin agar array ya object ke andar koi nested object/array hai to uska reference copy hota ha
const arr1 = [1,2, {name: "Deepanshu"}];
const arr2 = [...arr1] // shallow copy

arr2[0] = 100;
console.log(arr1);
arr2[2].name = "Rahul";
console.log(arr1);
// dono array alag ha , lekin object same hai. isiliye object me change dono me dikhai denge

// b. deep copy: sab khuch complete copy hota ha , Deep copy me nested object aur nested array bhi naye ban jate hain 
const arr3 = [1,2, {name: "Deepanshu"}];
const arr4 = structuredClone(arr3);
arr4[2].name = "Rahul";
console.log(arr3);
console.log(arr4);

// Important Methods and Properties of an array
// a. length property it give the number of elements present in array