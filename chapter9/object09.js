$(document).ready(function(){

    class Car{

        static getNextVin(){
            return Car.nextVin++; 
        }

        constructor(make, model){
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }
        
        static areSimilar(car1, car2){ //제조사와 모델이 같은지
            return car1.make === car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2){ //vin이 같은지
            return car1.vin ===car2.vin;
        }

        toString(){
            return `${this.make} ${this.model} ${this.vin}`
        }
    }

    class InsurancePolicy{}
    function makeInsurable(o){
        o.addInsurancePolicy = function(p) {this.insurancePolicy = p;}
        o.getInsurancePolocy = function( ) { return this.insurancePolicy;}
        o.isInsured = function( ) { return !!this.insurancePolicy;  }
    }

    Car.nextVin = 0;
    makeInsurable(Car.prototype);

    const car1 = new Car("Tesla", "S");
    const car2 = new Car("Mazda", "3");
    const car3 = new Car("Mazda", "3");

    car1.addInsurancePolicy(new InsurancePolicy());

    console.log(car1.getInsurancePolocy());


    console.log(car1.vin);
    console.log(car2.vin);
    console.log(car3.vin);

    console.log(car1);
    console.log(car2);
    console.log(car3);

    console.log(Car.areSimilar(car1,car2));
    console.log(Car.areSimilar(car2,car3));
    console.log(Car.areSame(car1,car2));
    console.log(Car.areSame(car2,car3));

    console.log(car1.toString());


});