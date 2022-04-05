//find() mathod : It will return first value which satisfies the condition
const array1 = [10,20,30,40,20,55,95,85];
const found = array1.find(element => element>50);
console.log("It will return first elements greater than 50 : "+found);
//or 
console.log(array1.find(element => element>50));