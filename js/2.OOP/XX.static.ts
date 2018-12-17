// Właściwość 'static' jest wpółdzielona przez wszystkie instacje klasy
// To oznacza ze wszystkie obiekty danej klasy maja dostęp do wspolnej zmiennej/metody

class Something {
  static instances = 0;
  constructor() {
    Something.instances++;
  }
  static Staticfun() {
    console.log('Statyczna funkcja');
  }
}

var s1 = new Something();
var s2 = new Something();

Something.Staticfun();
console.log(Something.instances);
