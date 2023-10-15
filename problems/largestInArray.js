
function maxInA(marks){
    let max = marks[0]
    for (let i=1; i<marks.length; i++){
        if (max < marks[i] ){
            max = marks[i];
        }
    }
    return max
    
}

var marks = [10,15,44,35,23,23,23,46,74,35,89]
var max = maxInA(marks);
console.log(max);