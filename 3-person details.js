//person details
console.log(""); //for allignment perposer
console.log("3-Person details");
console.log("");

class Person {
  constructor(name, age, sex, education, height, weight, place, email) {
    this.name = name;
    this.sex = sex;
    this.education = education;
    this.place = place;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.email = email;
  }
  pDetails() {
    return `        Name: ${this.name}.
        Sex : ${this.sex} 
        Age : ${this.age}
        Birth palce : ${this.place}
        Qualification : ${this.education}
        Weight : ${this.weight}
        Height : ${this.height}
        Contact : ${this.email} 
        `;
  }
}
let p1 = new Person(
  "Nivi",
  "20",
  "Female",
  "computerScience",
  "158cms",
  "58",
  "chennai",
  "vini134@gmail.com"
);
let p2 = new Person(
  "Dharun",
  "26",
  "Male",
  "computerScience",
  "180cms",
  "90",
  "bangalore",
  "dharn141@gmail.com"
);

console.log(p1.pDetails());
console.log(p2.pDetails());
