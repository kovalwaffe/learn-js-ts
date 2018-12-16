// Chyba anajlepsza rzecz w JS
// Mamy dostep do zmiennych
// Mechanizm domknięcia polega na zdefiniowaniu jednej funkcji wewnątrz drugiej.
// Wewnętrzna funkcja ma dostęp do zmiennych globalnych, swoich zmiennych lokalnych i również do zmiennych rodzica.
function outerFunction(arg) {
  var variableInOuterFunction = arg;

  function bar() {
    // mamy dostep do zmiennej
    console.log(variableInOuterFunction);
  }
  return function() {
    // tutaj tez mamy dostep do zmiennej
    console.log(variableInOuterFunction);
  };
}
var innerFunction = outerFunction('hello closure!');
// Note the outerFunction has returned
innerFunction(); // logs hello closure!
