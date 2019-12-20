$(document).ready(function(){

    class Vehicle{
        constructor(){
            this.passenger = [];
            console.log("Vehicle created");
        }
        addPassenger(p){
            this.passenger.push(p);
        }
    }

    class Car extends Vehicle{
        constructor(){
            super();
            console.log("Car created");
        }
        deployAirbags(){
            console.log("BWOOSH!");
        }
    }

    const v = new Vehicle();
    v.addPassenger("da");
    v.addPassenger("Hyun");
    console.log(v.passenger);

    const c = new Car();
    c.addPassenger("Sul");
    c.addPassenger("Ki");
    console.log(c.passenger);

    class Motocycle extends Vehicle{}
    const a = new Car();
    const m = new Motocycle();

    console.log(a instanceof Car);
    console.log(a instanceof Vehicle);
    console.log(m instanceof Car);
    console.log(m instanceof Motocycle);
    console.log(m instanceof Vehicle);

    


});