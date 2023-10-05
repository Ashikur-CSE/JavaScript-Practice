//create contructor
function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
}
//create object using constructor
var student1 = new Student("Ashikur", 21, 3.92);
var student2 = new Student("Shishir", 25, 3.56);

console.log(student1);
console.log(student2.name);

