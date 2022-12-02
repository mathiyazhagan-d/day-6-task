
console.log("")//for allignment perposer
console.log("4-Uber price");
console.log("")



class Uber {
    constructor(distance,WaitTimeCar,travelTimeInHour) {
        this.distance = distance;
        this.WaitTimeCar=WaitTimeCar;
      this.time=travelTimeInHour;
    }

        price()
        {
            let amount;
            if (this.distance > 0 && this.distance < 30) {
                this.rate = 8
            }
            else {
                this.rate = 5
            }
            return `The customer Journey Time ${this.time} hour.
waiting time for uber is ${this.WaitTimeCar} min
and the price = ${this.rate*this.distance-(3*this.WaitTimeCar)}/-`;
        }
    

}
let customer = new Uber(35,10,1)

console.log(customer.price());
