// Normal Function
function mySelf(){
    console.log("I am Ashikur RAhman");
    console.log("I am from Naogaon");
    var num = 5;
    sum = num * num
    console.log("Result is : " + sum );
}
//mySelf();
// var n =0;
// while(n <= 50){
//     console.log("Number is : " + n)
//     n++

// }
mySelf(); // call function

//Function With parameters and return value
function add(a,b){
    var result = a+b;
    return result;

}
// call function
var p = 20;
var x = add(p,10)
console.log("Add is : " , x);

// IIFE (Immediately Invokeable Function Expression): 
(function name(name){
    console.log("My Name is : " , name);
})(" Ashikur Rahman (IIFE) ");

// Function Expression
var Multiplication = function multiply(a,b){
    var result = a*b;
    console.log("Multiplication is: ",result);
    //return result;
};
Multiplication(10,20);
//console.log("Multiplication is: ",res)