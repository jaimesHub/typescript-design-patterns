// shapes
// area, perimeter
// simple - single function calculateTotalArea

// Interface a Shape
interface Shape {
    area(): number;
    perimeter(): number;
}


class Circle implements Shape {
    constructor(private radius: number) { }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

function calculateTotalArea(shape: Shape): number {
    return shape.area();
}

// client code
// let circle: Circle = new Circle(5);
// let rectangle: Rectangle = new Rectangle(4, 6);

// console.log("Area of Circle: ", calculateTotalArea(circle));
// console.log("Area of Rectangle: ", calculateTotalArea(rectangle));

// Real world example
// Date class
const today: Date = new Date();
console.log("Today: ", today);

// Get current year
const currentYear: number = today.getFullYear(); // don't have to worry about the underlying logic.
console.log("Current Year: ", currentYear);

// Get current month
const currentMonth: number = today.getMonth();
console.log("Current Month: ", currentMonth + 1); // don't have to worry about the underlying logic.

// Get current day
const currentDay: number = today.getDate(); // don't have to worry about the underlying logic.
console.log("Current Day: ", currentDay);
