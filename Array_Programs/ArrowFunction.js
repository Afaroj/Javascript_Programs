//Arrow function
console.log("Arrow Function in array . . . . ");
console.log("Creating an array:"+Array.from({length:5},(v,i)=>i));
console.log("");
console.log("Checking element with index . . . .");
const arr1 = ["f", "o", "o"]
Array.from(arr1, (element, index)=>{
    console.log(index, element);
})
console.log("");
Array.from(arr1, (element,index)=>{
    console.log("printing element: ", element);
})