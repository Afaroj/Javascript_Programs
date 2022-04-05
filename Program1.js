console.log("Hello World");
console.log("* * * *Addition of Two number program * * * *");
const num1= 35;
const num2= 20;
const sum=num1+num2;
console.log("sum of two numbers "+num1 +"+"+ num2+" is: "+sum);


console.log("* * * * Program to display first 10 natural numbers * * * *")
console.log("First 10 natural numbers");
const n=10;
for(let i=1;i<=n;i++)
{
    console.log(i);
}

console.log("* * * * Program to compute the sum of first 10 natural numbers * * * * ");
console.log("First 10 natural numbers");
const n1=10;
let s=0;
for(let i=1;i<=n1;i++)
{
    console.log(i);
}
for(let j=0;j<=10;j++)
{
   
     s=s+j;
}
console.log("sum of first 10 natural number is:"+s);

console.log("* * * * Program to display cube of given number * * * * ");
const no=3;
console.log("Given number is:"+no);
let cube=0;
cube=no*no*no;
console.log("cube of "+no+" is: "+cube);

console.log("+ + + + Displaying Pattern + + + + ");
var result = '';
const r=4;
for(let i=1;i<=r;i++)
{
    for(let j=1;j<=i;j++)
    {
        console.log(" * ");
    }
    console. log(result)

}

console.log("+ + + + Displaying Pattern2 + + + + ");
var res = '';
const row=4;
for(let i=row;i>=1;i--)
{
    for(let j=i;j>=1;j--)
    {
        console.log(" * ");
    }
    console.log(res)

}

console.log("* * * * Sorting given array * * * *");
var arr = [50,60,85,74,12,30,90];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);    
}
console.log("");
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            let tmp;
            tmp = arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
        }
    }
}
console.log("Sorted arraylist is:");
for(let i=0;i<=arr.length;i++)
{
    console.log(arr[i]);
}

console.log("+ + + + Finding element in given array + + + +");
var arr = [50,60,85,74,12,30,90,100,101,500,2,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);    
}
console.log("");
let search=100;
for(let i=0;i<=arr.length;i++)
{
    if(arr[i]==search)
    {
        console.log("Element is present in array! ! !");
    }
    else
    {
        console.log("Element is not present in array");
    }
}

console.log("Pattern printing");
rows=4;
for(let i=0;i<=rows;i++)
{
    for(let j=0;j<=i;j++)
    {
        console.log(" * ");
    }
    console.log("\n");
}


var result  = '';
for(var i = 1; i < 11; i += 1) {
  result = result + i;
}
console.log(result)