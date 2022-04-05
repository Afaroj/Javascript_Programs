//Create an array with different methods and show length of the array
const list = ['Apple','Banana','Peach','Orangle'];
console.log("Given array is: "+list);
console.log("Length of Array: "+list.length);


const demo = new Array(10);
console.log("Length of Array: "+demo.length);

const demo1 = new Array('a','b','c');
console.log("Given array: "+demo1);
console.log("Length of Array: "+demo1.length);

console.log(Array.of('Undefined'));
console.log("Length of Array: "+Array.length);

//Program to create a String from an Array
const demo2=['This ','is ','example ','to ','create ','a ','string ','by ','using ','array'];
console.log(demo2.join( ));

//Program to access an array item by its index
const fruits = ['Apple','Banana','Peach','Orange'];
console.log("Given array is: "+fruits);
console.log(fruits[0]);

//Find index of the array
console.log("Index of peach: " +fruits.indexOf("Peach"));

//Checking if array is containing given element
console.log("Is Array containing salt : "+fruits.includes("salt"));
console.log("Is Array containing Apple : "+fruits.includes("Apple"));

//Add new item to the array
console.log("Given array is: "+fruits);
const newelement = fruits.push("Guava");
console.log("Adding new element: "+fruits);
console.log("Removing new element: "+fruits.pop());
console.log("Given array is: "+fruits);

//Removing item from list by using splice
console.log("Given array is: "+fruits);
console.log("Removing element from index 3: "+fruits.splice(3));
console.log("Given array is: "+fruits);
console.log("Removing lat 2 elements: "+fruits.splice(-2));
console.log("Given array is: "+fruits);

