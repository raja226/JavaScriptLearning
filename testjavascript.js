//"use strict"; // Enable strict mode


console.log("First JS program Rajasekhar");
//Variable Decalartion:

var a= 10 
var b= "Test"
var c = true
console.log(a);
console.log(b);

console.log(c);

var myName = "Rajasekhar",age = 35, designation= "Developer";

console.log("Name: " +myName +"\nand Age: "+ age +"\ndesignation: " +designation);

console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(a));
console.log(a**2);//a power 2
console.log(a**3); //a power of 3

var val1= 100;
var val2 = 200;
var val3 = "100";
console.log(val2> val1);

console.log(val1 == val3);
console.log(val1 === val3);

//type conversion : implicit,explicit conversion

console.log("hi"+"hello");
console.log("hi" - "hello"); //NaN

console.log(100 + null);
console.log(100 *null);

const num = "100.0";
console.log(typeof Number(num));
console.log( parseFloat(num));
let date = new Date();
console.log(date);
console.log(Number(date));
console.log(date.getTime());
console.log(date.toString());

//use strict : avoid the with out datat type of variable declaration.
withStrictfunction();



function withStrictfunction()
{
   // "use strict"; 

basicval = "test" // invalid

console.log("basic value:"+basicval);
}
