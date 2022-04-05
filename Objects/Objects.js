//Delete operation
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

var myMap = new Map();
console.log(myMap.set('hello', 'there'));

console.log(myMap.delete('hello')); 
console.log(myMap.has('hello'));    
