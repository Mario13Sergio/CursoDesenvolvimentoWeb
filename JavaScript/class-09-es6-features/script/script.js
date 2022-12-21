// import { soma, sub, mult, div } from "./functions.js"; 
import { operations } from "./functions.js";
let num1 = 7
let num2 =3

console.log("PRINCIPAL");

operations.soma(num1, num2)
operations.sub(num1, num2)
operations.mult(num1, num2)
operations.div(num1, num2)


// >>>>>>> Class <<<<<<<<<<
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
        this.canDrive = age >= 18
        this.status = () => {
            if (this.canDrive) {
                return 'Pode dirigir';
            } else {
                return 'Não pode dirigir';;
            }
        }
    }
}

console.log(new Person('Emanuel', 30).status());

//>>>>>>> Factory (Creational Design Pattern ) <<<<<<<<<<
function person(name, age) {
    return {
        name,
        age,
        canDrive: age >= 18,
        status: function status(canDrive) {
            if (this.canDrive) {
                return 'Pode dirigir';
            } else {
                return 'Não pode dirigir';
            }
        }
    }
}

console.log(person('Emanuel', 30).status());