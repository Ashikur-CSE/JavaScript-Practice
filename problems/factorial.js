var factorial_ = 1;
var n= 7;
for (var i=1; i<=n; i++){
    factorial_ = factorial_ * i;
}
console.log(factorial_);

//Factorial with function

function factorial(x){
    var fact = 1;
    for (let i=1; i<=x; i++){
        fact = fact*i;
    }
    return fact;
    
}
var x=7;
var factResd = factorial(x);
console.log("Factorial of "+ x + " is: " + factResd);


//Factorial with while loop
function getFact(num){
    var factW = 1;
    var i = num;
    while(i>=1){
        factW = factW *i;
        i--;
    }
    return factW;
}
var factWres= getFact(7);
console.log("Factorial (while)  is: " + factWres);