console.log("Program to assign an array with elements and duplicating their values . . . . ");
const numbers = [1, 2, 3, 4, 5];
console.log("Given array : "+numbers);
//const length = numbers.length;
for (var i = 0; i < numbers.length; i++) {
  //numbers[i] *= 2;
  numbers[i]=numbers[i]*2;
}
console.log("After duplication of values : "+numbers);