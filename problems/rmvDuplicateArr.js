var marks = [10,15,44,35,23,23,23,46,15,10,74,35,89]
var unique = [];

//using of in for loop
function duplicate(marks) {
    for (const x of marks) {
        if (unique.indexOf(x)==-1){
            unique.push(x);
    
        }
    }
    console.log(unique)
}
duplicate(marks);
