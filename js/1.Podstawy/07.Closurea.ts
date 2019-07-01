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


let posts = [];

function readPost(cb) {
  setTimeout(() => {
    posts.push('Wpis 1', 'Wpis 2');
    cb();
  }, 2000);
}

function showPost() {
  console.log(posts);
}

readPost(function() {
  showPost(); //["Wpis 1", "Wpis 2"]
});
//lub
readPost(showPost);