//Code For Circle problem (2nd Question of assignment 6)

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

    circleDetails(){
        let circleData=`
           Radius:${this.radius} & Color:${this.color}
        `
        return circleData;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = {
    radius:1.00,
    color:"red",
    get getRadius(){
        return this.radius;
    },
    set setRadius(newRadius){
        this.radius=newRadius;
    },
    get getColor(){
        return this.color;
    },
    set setColor(newColor){
        this.color=newColor;
    }
};

console.log(circle1.radius); //getting the radius through getter method

circle1.setRadius= 2.00;

console.log(circle1.radius); //using setter to change the radius value

console.log(circle1.color); //getting the color of circle through getter method

circle1.setColor = "blue";

console.log(circle1.color); //using setter to change the color of circle

let circle2 = new Circle(3.00,"grey");

console.log(circle2.circleDetails()); // using object reference to print the details of circle using method defined in the class

console.log("The Area of circle 2 is "+ circle2.getArea()); //printing the area of circle 2
console.log("The Circumference of circle 2 is "+ circle2.getCircumference()); //printing the circumference of circle 2