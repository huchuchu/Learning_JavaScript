$(document).ready(function(){

    const Car = (function() {
        const carProps = new WeakMap();
      
        class Car {
          constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ["P", "N", "R", "D"];
            carProps.set(this, { userGears: this._userGears[0] });
          }
          get userGear() {
            return carProps.get(this).userGear;
          }
          set userGear(value) {
            if (this._userGears.indexOf(value) < 0)
              throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;
          }
      
          shift(gear) {
            this.userGear = gear;
          }
        }
        return Car;
      })();

    class InsurancePolicy{}
    function makeInsurable(o){
        o.addInsurancePolicy = function(p3) { this.InsurancePolicy = p;}
        o.getInsurancePolicy = function(){ return this.InsurancePolicy;}
        o.isInsured = function() { return !!this.InsurancePolicy;}
    }

    //1)
    // makeInsurable(Car);
    // car1.addInsurancePolicy(new InsurancePolicy());
    
    //2)
    // const car1 = new Car();
    // makeInsurable(car1);
    // car1.addInsurancePolicy(new InsurancePolicy());

    //3)
    makeInsurable(Car.prototype);
    const car1 = new Car();
    car1.addInsurancePolicy(new InsurancePolicy());

    console.log(car1.getInsurancePolicy());
    console.log(car1.isInsured());
    console.log(InsurancePolicy);
    console.log(car1 instanceof InsurancePolicy);

    
    // const car1 = new Car ("Tesla", "Model S");
    // const car2 = new Car ("Mazda", "3i");

    // console.log(car1.shift === Car.prototype.shift);
    // car1.shift('D');
    // console.log(car1.userGear); 
    // console.log(car1.shift === car2.shift);

    // car1.shift = function(gear) {this.userGear = gear.toUpperCase();}
    // console.log(car1.shift === Car.prototype.shift);
    // console.log(car1.shift === car2.shift);
    // car1.shift('d');
    // console.log(car1.userGear);

    

});