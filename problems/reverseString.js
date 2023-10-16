const name = "Ashikur Rahman";

function reverseString(text){
    let reverse = "";
    for(const x of text){
        reverse = x+reverse;
    }
    return reverse;
}

var reverseStr = reverseString(name);
console.log("My name in reverse: " + reverseStr);