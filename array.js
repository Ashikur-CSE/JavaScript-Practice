// var friends = new Array(10)
// const points = new Array(40, 100, 1, 5, 25, 10);

var friends = ["Ashik", "Kris", "shishir", "Akash"];
var points = [40, 100, 1, 5, 25, 10]

console.log(points.indexOf(100));
console.log(points.indexOf(1000));
points[0]=10
console.log(points)


console.log(friends[3]);
console.log(friends.length);
console.log(friends.toString()); //The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(friends.join("*")); //The join() method also joins all array elements into a string.

friends.pop(); 
console.log(friends)
var lastItem = friends.pop();
console.log("lastItem :" + lastItem)
friends.push("Bangladesh","India");
console.log(friends);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
friends.shift(); 
console.log(friends)
console.log(friends.shift()); //The shift() method returns the value that was "shifted out":

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(friends)
var firstItem = friends.unshift("Los Angeles"); 
console.log(friends)
console.log(firstItem) //The unshift() method returns the new array length:

//Array elements can be deleted using the JavaScript operator delete.Using delete leaves undefined holes in the array.
delete points[0]
//points[0] = 200;
console.log(points)

//The concat() method creates a new array by merging (concatenating) existing arrays:
var Boys = friends.concat(points);
//var Boys = friends.concat(100,300); The concat() method can also take strings as arguments:
console.log(Boys)

//Splicing and Slicing Arrays
var fruits = ["banana", "Mango", "Orange", "Stwbery"];
fruits.splice(2,0, "Ashikur", "Shishir");
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
console.log(fruits)


//var sl = fruits.slice(2);
var sl =  fruits.slice(1,4)
console.log(sl)
