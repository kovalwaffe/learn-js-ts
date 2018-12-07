//Lepsza kompozycja niz naduzywane Dziedziczenie
//Dziedziczyc mozna tylko po JEDNEJ klasie

class Animal {
  constructor(protected name: string) {}

  giveVoice() {
    console.log(`Nazywam sie ${this.name}!`);
  }
}

class Dog extends Animal {
  constructor(protected name: string) {
    super(name);
  }

  giveVoice() {
    console.log('Szczek, szczek!');
    super.giveVoice();
  }

  eat() {
    console.log('Mniam.');
  }
}

//Dzidziczenie wilopoziome
class Horse extends Animal {
  constructor(protected name: string) {
    super(name);
  }

  giveVoice() {
    console.log('Parsk, parsk!');
    super.giveVoice();
  }
}

class ShibaInu extends Dog {
  constructor(protected name: string) {
    super(name);
  }

  giveVoice() {
    console.log('Ale jestem slodki!');
    super.giveVoice();
  }
}
//const animals:Array<Horse|Dog|ShibaInu|Poodle> = [];

const piesek = new Dog('Burek');
const qn = new Horse('Rafał');
const animals: Array<Animal> = [piesek, qn];
for (const animal of animals) {
  animal.giveVoice();
}

piesek.eat();
//animals[0].eat() // błąd! widoczne są tylko metody z klasy Animal
