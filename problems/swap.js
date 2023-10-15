function swap(first, second) {
    var temp = first;
    first = second;
    second = temp;
    console.log(first , second);
}
swap(10,20);

//Other rule
var a=500;
var b = 1000;
[a,b] = [b,a];
console.log("Swap Numbers are:" , a, b);
