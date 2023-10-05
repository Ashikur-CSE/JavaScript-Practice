//create contructor
function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
}
//create object using constructor
//When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
var student1 = new Student("Ashikur", 21, 3.92);
var student2 = new Student("Shishir", 25, 3.56);

console.log(student1);
console.log(student2.name);

//Function in constructor
function Mobile(name,price,color,ram){
    this.name = name;
    this.price = price;
    this.color = color;
    this.ram = ram;

    this.display = function (){
        console.log(this.name);
        console.log(this.price);
        console.log(this.color);
        console.log(this.ram);
    }
}

var phone1 = new Mobile("Iphone15", "150$", "White", "4gb");
var phone2 = new Mobile("Iphone13", "120$", "Black", "3gb");
console.log(phone1.name);

//call function
phone1.display();
phone2.display();

