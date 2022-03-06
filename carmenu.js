class Car {
    constructor(make, model, msrp, mpg) {
        this.make = make;
        this.model = model;
        this.msrp = msrp;
        this.mpg = mpg;
    }
    describe() {
        return `The ${this.make} ${this.model} costs around ${this.msrp} and gets ${this.mpg} mpg`
    }
}

class Menu {
    constructor() {
        this.cars = []; //stores all Car objects that are created
    }
    mainMenu() {
        let choice = prompt(`
        0) Exit Program
        1) Add a car
        2) delete car
        3) update a car
        4) view all cars
        `)
        switch (choice) {
            case "1":
                this.addCar(); //have to have a this keyword
                break;
            case "2":
                this.deleteCar();
                break;
            case "3":
                this.updatedCar();
                break;
            case "4":
                this.viewCars();
                break;
            case "0":
                this.exitProgram();
                break;
            default:
                this.mainMenu();
        }
    }
    
    addCar() {
        const newCar = new Car (
            prompt("Enter Make: "),
            prompt("Enter Model: "),
            prompt("Enter MSRP: "),
            prompt("Enter MPG: " )              
        )
        this.cars.push(newCar);
        alert("The car has been added");
        this.mainMenu();
    }

    deleteCar(){
        let carToDelete = prompt("Enter the id of the car to delete: ");
        let removedCar = this.cars.splice(partsInt(carToDelete), 1) //carToDelete is the inde we want to remove from the array and 1 is how many we want to delete
        alert(`You removed  ${removedCar.make} ${removedCar.model} from the list`);
        this.mainMenu()
    }

    viewCars(){
        let allCars = "";
        let i = 0;
        for (let car of this.cars){
            allCars += `${i}` + car.describe() + "\n"
            i++;
        }
        alert(allCars);
        this.mainMenu();
    }

    endProgram(){
        alert ("Goodbye!");
    }
}

const menu = new Menu();
menu.mainMenu();