console.log("+ + + + All About Arrays + + + +");

let marks = [95,85,75,90,78,86];
const fruits=['Apple','Banana','Peach','Orangle'];
const mixedArray = ['Alina',10,2.5,[30,60]];
const arr=new Array(23,125,100,'Strawberry');
console.log("");
console.log("Array with marks of students: "+marks);
console.log("Array with fruits name: "+fruits);
console.log("Printing mixed array: "+mixedArray);
console.log(arr);
console.log("Printing Fruit name which is present on first index: "+fruits[1]);

console.log("Length of arr: "+arr.length);
console.log("Length of marks array: "+marks.length);
console.log("Checking the given element is array or not: "+Array.isArray('arr'));
console.log("Checking the given element is array or not: "+Array.isArray(arr));

console.log("Adding elements in array ");
arr[0]="Selin";
console.log(arr);

let arrelement = arr[1];
console.log("Element at index 1 is: "+arrelement);

console.log("Checking index of given array element");
let value = marks.indexOf(90);
console.log(value);

console.log("Modyfying/ Mutating / Adding new value into given array");
marks.push(100);
console.log(marks);
marks.pop(100);
console.log(marks);
console.log("To add value at first index");
marks.unshift(265);
console.log(marks);
console.log("remove value from first index using shift");
marks.shift();
console.log(marks);
console.log("remove value from index specific positions using splice");
marks.splice(1,3);
console.log(marks);
marks.splice(2,3);//starting index from 2 and remove 3 values
console.log(marks);

console.log("Creating new array an concat it into old array");
marks2=[1,2,3,14,25];
marks= marks.concat(marks2);
console.log(marks);

console.log(isArray.marks2)

console.log("Learning about objects");
let myObject = {
    name: "Harry",
    Age:"20",
    aciveStatus:true,
    marks:[90,95,85,89]
}
console.log(myObject)
console.log("Checking single entry value");
console.log(myObject.aciveStatus)
console.log(myObject.name)
console.log("Another way to access data");
console.log(myObject['name'])
