//Code to show the details of person using Parent and Child Class (3rd Question of assignment 6)

class Person{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
}

class Employee extends Person{
    constructor(name,age,city,position){
        super(name,age,city);
        this.position=position;
    }
}

let newPerson = new Employee("Ravi",29,"Pune","Front End Developer");

console.log(newPerson);