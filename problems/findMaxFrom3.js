function findMax(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(a<c && b<c){
        return c;
    }
    else{
        return b;
    }
}
var maxNum = findMax(288,5065,15789);
console.log("Maximum number is:", maxNum);

//Using math functions
var maxFun = Math.max(30,50,77,44,88,34,7657,32,423,45,5,465,);
console.log("Max number of functions:", maxFun);