// var
//
// Zmienne zadeklarowane za pomocą var działają w zakresie
// *funkcji* lub *globalnie* - poza funkcją.
// Przez zasieg globalny rozumiemy jako zasieg np.
// w przeglądarce jako składową obiektu *window*
// np.  window.zminnnaGlobalna
{
  function myFoo() {
    var myVar = 10;
  }
  console.log(myVar);
  // ReferencefError: myVar is not defined
}

{
  var yourFoo = 123;
  if (true) {
    var yourFoo = 456;
  }
  console.log(yourFoo); // 456
  // zmienna yourFoo zmienia wartość,
  // nie jest towrzona nowa zmianna w funkcji
}
{
  // HOISTING - windowanie zmiennej na poczatek funkcji lub skryptu
  // zmienna nie jest zdefiniowana ale istnieje tzn nie ma komunikatu ze jest nie zadeklarowana
  console.log(zadeklarowanaZmienna); //undefined
  var zadeklarowanaZmienna;
  zadeklarowanaZmienna = 'Jestem zadeklarowana i zaincjowana w tym miejscu';
}

{
  // HOISTING Funkcji dziala tak samo
  bar(); // Wywołanie funkcji foo()
  function bar() {
    console.log('Wywołanie funkcji bar()');
  }
  // Róznica jest gdy fukcja przypisane jest do zmiennej tzn wyrażenie fukkcyjne
  barVar(); // ReferenceError: barVar is not defined
  var barVar = function() {
    console.log('Wywołanie funkcji bar()');
  };
}

// let
//
// Deklaracja zmiennej za pomocą let sprawia,
// że zmienna działa w zakresie blokowym, np. wewnątrz pętli.
for (let i = 0; i < 5; i++) {
  for (var j = 5; j <= 5; j++) {
    console.log(i);
  }
}
// Jest dostep do zmiennej 'j' poniewaz var ma zakres funcji/skryptu
console.log(j);
// Nie ma dostępu do zmiennej 'i' zakdeklarowanej przez 'let'
// ReferenceError: i is not defined
// console.log(i);

// CONST
//
// Deklaracja stalej
// Zasięg 'const' jest taki sam jak 'let' - blokowy.
// Deklaracja stałej za pomoca 'const' musi byc zainitializowana
const whoIAmValue: string = 'world';
// Nie mozna zmieniać wartość stałej
// whoIAmValue = 'Pablo'; // error const
// TypeError: Assignment to constant variable.

// Nie mozna zmianiać referencji do obiektu
// Można zmieniać wlasciwosci obiektów
// Rekomenduje się użycie 'const' przy towrzeniu stałych typu prostego
const obj = {
  name: 'Pablo',
  surname: 'Escobar'
};

obj.name = 'Pawel';
console.log(obj);
