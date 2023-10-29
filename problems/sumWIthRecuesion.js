function sum(i){
    if (i==1){
        return 1;
    }
    return i + sum(i-1)
    //6+sum(6-1)
    //6+5+sum(5-1)+................................................................
}
console.log(sum(6));