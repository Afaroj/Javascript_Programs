//findIndex() method: it will return first index value which satifies the condition
const arr = [100,10,20,30,500,654,856];
const isitLargeNo = (element) => element>300;
console.log(arr.findIndex(isitLargeNo));
//or
console.log(arr.findIndex((element) => element>300));