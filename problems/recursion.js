function factRic(n){
    if (n==1){
        return 1;
    }
    else{
        return n*factRic(n-1);
    }
}
var recursiveFact = factRic(4);
console.log("Factorial is: ", recursiveFact);