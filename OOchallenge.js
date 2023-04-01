

//#1

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.year} , ${this.make} ${this.model} .`;
    }}
  
//#2

class Car extends Vehicle {
    constructor(make, model, year) {
      super(make ,model ,year);
      this.numWheels = 4;
    }}

//#3

class Motorcycle extends Vehicle {
    constructor( make ,model, year) {
      super(make ,model ,year);
      this.numWheels = 2;
    }
  revEngine() {
      return "VROOM!";
    }}
  
//#4

class Garage {
    constructor( capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add( newVehicle) {
      if (! (newVehicle instanceof Vehicle )) {
        return "Only vehicles are allowed in the lot";
      }
      if ( this.vehicles.length >= this.capacity) {
        return "Sorry, the lot is full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added to lot!";
    }}