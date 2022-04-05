//Static Methods
//Array.from it is a static method which creates a new, shallow - copied Array instance from an array-like or iterable object.
console.log("+ + + + + Static Methods + + + + +");
console.log("");
console.log("Creating Array by using Array.from().......");
console.log(Array.from('Arrays'));
console.log(Array.from([1,2,3,4],x=>x+x));
console.log("");

//Arrow function
console.log("Arrow Function in array . . . . ");
console.log(Array.from({length:5},(v,i)=>i));
console.log("");
const arr1 = ["f", "o", "o"]
Array.from(arr1, (element, index)=>{
    console.log(index, element);
})
Array.from(arr1, (element,index)=>{
    console.log("element", element);
})

//Array.isArray will check the element is array or not
console.log("Checking weather the given is array or not by using Array.isArray(). . . . ");
console.log(Array.isArray([1,2,3,4,5]));
console.log(Array.isArray({demo:1234}));
console.log(Array.isArray('Afaroj'));
let arr=[20,30,10,40,50];
console.log(Array.isArray(arr));
console.log("");
//Array.of() it will create a new array instance from a variable number of arguments
//It will basically returns an array with given values
console.log("Creating Array by using Array.of() . . .");
console.log(Array.of(8,9,10));
console.log("");

console.log("Creating array by using Array .......");
console.log(Array(7));
console.log(Array(1.02,100,3,'demo')); //Array will also return array with given values
console.log("");

console.log("Instance Properties . . . .");
console.log("Checking length of given Array . . . . ");
const List=['salt', 'sugar','buiscuits','soap'];
console.log(List.length);

const listB = new Array(6);
const listC = [1,2,3,4];
console.log(listB);
console.log(listB.length);
console.log("List C: "+listC);
console.log(listC.length);
console.log("");

console.log("Program to assign an array with elements and duplicating their values . . . . ");
const numbers = [1, 2, 3, 4, 5];
//const length = numbers.length;
for (var i = 0; i < numbers.length; i++) {
  //numbers[i] *= 2;
  numbers[i]=numbers[i]*2;
}
console.log(numbers);

//ERROR !!!!
console.log("Using Array.prototype.at() . . . . ");
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1[2]}`);

console.log("");
console.log("copywithin() method . . . . ");
const newarr=['a','b','c','d','e','f','g','h','i','j'];
console.log(newarr.copyWithin(1,3,5));//copying elemnt from 3rd index to 5th index

console.log("");



