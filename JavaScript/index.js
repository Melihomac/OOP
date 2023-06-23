// node index.js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName = () => {
        return this.name;
    }
    getAge = () => {
        return this.age;
    }
}

let person1 = new Person("Melih", 25);
console.log(person1.getName());
console.log(person1.getAge());

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }
    getAddress = () => {
        return this.address;
    }
    getPrice = () => {
        return this.price;
    }
    getResidents = () => {
        return this.residents;
    }
    addResident = (resident) => {
        this.residents.push(resident);
    }
}

let Miray = new Person("Miray", 8);
let house = new House("Kocasinan", 20000, [person1, Miray]);
console.log(house.getResidents());
let irem = new Person("İrem", 21);
house.addResident(irem);
console.log(house.getResidents());
