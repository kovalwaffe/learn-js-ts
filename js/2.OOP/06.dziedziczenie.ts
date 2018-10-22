class Animal {
    protected name: string;
    protected numberOfLegs: number;

    constructor(givenName: string) {
        this.name = givenName;
        console.log('konstruktor Animal');
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Cat extends Animal {

    constructor(name: string) {
        super(name);
        console.log('konstruktor Kot');
    }

    sayHello() {
        super.sayHello();
    }
}

class smallCat extends Cat {
    
    constructor(name: string) {
        super(name);
        console.log('konstruktor samllKot');
    }

    sayHello() {
        super.sayHello();
    }
}

class Horse extends Animal {

    constructor(name: string) {
        super(name);
    }

    sayHello() {
        super.sayHello();
    }
}

const cat = new Cat('Kicka');
const horse = new Horse('Rafał');
const smallcat = new smallCat('Koteczek');

const animals: Array<Animal> = [cat, horse, smallcat];

for (const animal of animals) {
    animal.sayHello();
}