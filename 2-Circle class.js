//circle - class
console.log(""); //for allignment perposer
console.log("2-Circle class");
console.log("");

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
    if (typeof this.radius == "number" && typeof this.color == "string") {
      this.radius = radius;
      this.color = color;
    } else if (this.color == null && typeof this.radius == "number") {
      this.radius = radius;
      this.color = "not given";
    }
  }
  Circle() {
    console.log(
      `The given detail for circle the radius is ${this.radius} and color is ${this.color}`
    );
  }
  getRadius() {
    console.log(`The radius of the circle ${this.radius}`);
  }

  getColor() {
    console.log(`Color of the circle is ${this.color}`);
  }

  getArea() {
    // let pi = 3.14;
    console.log(`Area of circle is ${Math.PI * (this.radius * this.radius)}`);
  }

  getCircumference() {
    // let pi = 3.14;
    console.log(`Circumference of circle is ${2 * Math.PI * this.radius}`);
  }
  setRadius() {
    this.radius = 4;
    console.log(`the radius  set assign ${this.radius}`);
  }
}
let cDR2 = new Circle(5.0, "red");
let cDR1 = new Circle(1.0);

cDR1.Circle();
cDR2.Circle();
cDR2.getRadius();
cDR2.getColor();
cDR2.getCircumference();
cDR2.getArea();
cDR2.setRadius();
