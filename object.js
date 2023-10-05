var student = {
    name : "Ashikur",
    age : 22,
    color : "White",
    height : "160 feet"
};

//print value
console.log(student);
console.log(student.name);
console.log(student["age"]);

//set object value  
student.name = "Ashikur Rahman";
student["age"] = 25;

console.log(student);
console.log(student.name);
console.log(student["age"]);


//fUNCTION in object
var student2 = {
    fname : "Ashikur",
    lname : "Shishir",
    age : 22,
    color : "White",

    fullname : function (){
        console.log("My name is " + this.fname + " " + this.lname);
    }
};

student2.fullname();
console.log(student2.age);