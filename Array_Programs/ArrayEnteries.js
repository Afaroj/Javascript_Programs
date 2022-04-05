//entries method will return a new array with value/key pairs for each index in array.

const array = ['A','B','C','D','E'];
const temp = array.entries();
console.log(temp.next().value);//next will return next index and value will return the value/key
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);

//Iterating with index and element
console.log("Given Array is : "+array);
for(const [index,element] of array.entries())
    console.log("Elements with index ad values : ["+index,element+"]");

//Using of for .of loop
//printing all enteries of given array
console.log("Given Array is : "+array);
var tmp = array.entries();
for(let e of array){
    console.log(e);
}  
