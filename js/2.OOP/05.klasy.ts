interface Animal2 {
    name: string;
    numberOfLegs: number;
}

export class Dog implements Animal2 {
    name: string;
    numberOfLegs;
    constructor(givenName: string) {
        console.log('konstruktor');
        this.name = givenName;
    }
    public sayHello(): string {
        return `Hello, my name is ${this.name}`;
    }
}
//Deklaracja klasy towrzy 2 rzeczy:
// - typ rezprezentujacy instancje obiektu
// - dunkcje konstruktora
// 
//Modyfikatory dostępu
//public - domyslny
//private - dostep tylko w klasie
//Do pól zadeklarowanych jako protected możemy uzyskać 
//dostęp również z poziomu klas pochodnych, a do pól private nie.

//readonly ???
class Animal2 {  
    private name:string;

    constructor(givenName:string) {
        this.name = givenName;
    }

    public sayHello():string {  
            return `Hello, my name is ${this.name}!`;
    }
}

const dog = new Animal2('Burek');
dog.sayHello() // 'Hello, my name is Burek!';

const dog = new Dog('Pimpek');
console.log(dog.sayHello());

//klasy abstrakcyjne nie tylko zawierają deklaracje pól i metod, 
//ale mogą też zawierać ich implementacje
//Klas A nie mozńa instancjonować
abstract class Animal {
    constructor(protected name: string) { }

    giveVoice() {
        console.log(`Nazywam sie ${this.name}!`);
    }

    abstract eat(): void;
}

//const animal = new Animal(''); // blad!

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}