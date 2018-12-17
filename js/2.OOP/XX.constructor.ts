// konstruktor jest opcjonalny
class Foo {}
var foo = new Foo();

class Foo {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
}
// Skrócona wersja zapisu konstruktora
// od razu pole jest zainicjonowane i skopiowane
class Foo {
  // 'members' sa od razu zainicjopnowani
  members = [];
  constructor(public x: number) {}
  add(x) {
    this.members.push(x);
  }
}
