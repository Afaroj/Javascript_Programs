console.log("Modyfying/ Mutating / Adding new value into given array");
let marks = [95,85,75,90,78,86];
console.log("Given Array is : "+marks);
console.log("Array after adding value 100 : ");
marks.push(100);
console.log(marks);
console.log("Array after removing value 100 : ");
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
