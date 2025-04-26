//1. method class

class school 
{
    student(name,email,contactnumber)
    {
        console.log("student details...........");
        console.log(`name : ${name})`);
        console.log(`email : ${email})`);
        console.log(`contactnumber : ${contactnumber})`);
    }
    faculty(name, email, contactNumber)
     {
        console.log("Faculty Details:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact Number: ${contactNumber}`);
    }
}
        
const School = new school()
School.student("Resha Nakarani", "reshanarani@gmail.com", "9898771458");
School.faculty("Girish sir", "Girishmafiya@gmail.com", "9510821039");



// 2) Create a Person class with an argument name and age. 

class Person {
    constructor(name, age)
     {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person 
{
    printDetails()
     {
        console.log("Employee Details:");
        console.log(`Name : ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const emp = new Employee("Resha", 20);
emp.printDetails();



// 3) Employee class creates a constructor called print a simple message. (1 mark)

class Employeeee
{
    constructor() 
    {
        console.log("Welcome To Emp Class !!!");
    }
}

const empWithMessage = new Employeeee();



// 4) Create a Shape class and create a rectangle and circle method 

class Shape 
{
    circleArea(radius) 
    {
        const area = 3.14 * radius * radius;
        console.log(`Circle Area: ${area}`);
    }

    rectangleArea(width, height) {
        const area = width * height;
        console.log(`Rectangle Area: ${area}`);
    }
}

const myShape = new Shape();
myShape.circleArea(9); 
myShape.rectangleArea(23, 89);