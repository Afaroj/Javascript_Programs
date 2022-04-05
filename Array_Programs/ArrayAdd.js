//Add new item to the array
console.log("Add new item to the array...");
console.log("");
const fruits = ['Apple','Banana','Peach','Orange'];
console.log("");
console.log("Given array is: "+fruits);
const newelement = fruits.push("Guava");
console.log("Adding new element: "+fruits);
console.log("Removing new element: "+fruits.pop());
console.log("Given array is: "+fruits);

console.log("Different way to add element in array . . . . ");
const names=['Alex','Ayeda','Peter','Olav'];
console.log("Adding elements in array ");
names[0]="Selin";
console.log(names);