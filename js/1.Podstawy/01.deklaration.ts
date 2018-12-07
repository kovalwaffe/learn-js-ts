// var
// Zmienne zadeklarowane za pomocą var działają w kontekście funkcji lub skryptu
function foo() {
  var myVar = 10;
}
// console.log(myVar);
// ReferenceError: myVar is not defined

//zmienne domyslenie sa inicjowana jako 'undefined'
var zmienna: number; // undefined
console.log(zmienna);

// let
// Deklaracja zmiennej za pomocą let sprawia, że zmienna działa w kontekście blokowym, np. wewnątrz pętli.
for (let i = 0; i < 5; i++) {
  for (var j = 5; j <= 5; j++) {
    console.log(i);
  }
}
// Jest dostep do zmiennej
console.log(j);

// Nie ma dostępu do zmiennej
// ReferenceError: i is not defined
// console.log(i);

// CONST - deklaracja stalej (zmienne prostej)
const whoIAmValue: string = 'world';

// TypeError: Assignment to constant variable.
// whoIAmValue = 'Pablo'; // error const
// funkcja zwraca wartosc typu string

const obj = {
  name: 'Pablo',
  surname: 'Escobar'
};

obj.name = 'Pawel';
console.log(obj);
// Można zmieniac wartosci tablic i obiektow

// HOISTING - windowanie zmiennej na poczatek funkcji lub skryptu
// zmienna nie jest zdefiniowana ale istnieje tzn nie ma komunikatu ze jest nie zadeklarowana
console.log(zadeklarowanaZmienna); //undefined
var zadeklarowanaZmienna;
zadeklarowanaZmienna = 'Jestem zadeklarowana';

// HOISTING Funkcji dziala tak samo
bar(); // Wywołanie funkcji foo()
function bar() {
  console.log('Wywołanie funkcji bar()');
}
// Róznica jest gdy fukcja przypisane jest do zmiennej tzn wyrażenie fukkcyjne
var barVar = function() {
  barVar(); // ReferenceError: barVar is not defined
  console.log('Wywołanie funkcji bar()');
};
