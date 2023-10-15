function sumOfArrays(marks){
    let sum=0;
    for (let i=0; i<marks.length; i++){
        const element = marks[i];
        sum = sum + element;
    }
    return sum;
}

var sumOfArray = sumOfArrays([10,15,44,35,23,23,23,46,74,35,89]);
console.log("Sum of this array: " + sumOfArray)

//Without Function
var marks = [10,15,44,35,23,23,23,46,74,35,89]
let sum= 0;
for(let i=0; i<marks.length; i++){
    const element = marks[i];
    sum = sum + element;
}
console.log(sum);