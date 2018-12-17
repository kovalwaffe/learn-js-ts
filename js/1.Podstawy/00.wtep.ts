// TypeScript jest nadzbiorem jezyka JS
// TS jest transpilowany do JS

// Zalety TS:
// TS chorni przed rzeczami ktore nie powinny się dziac np.
[] + []; // ''
// TS będzie zwracać bad
{}+[]; // JS : 0, TS Error
[] + {}; // JS : "[object Object]", TS Error
{} + {}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
'hello' - 1; // JS : NaN, TS Error

// inicjalicacja
// Zmienne domyslenie sa inicjowana jako 'undefined'.
var zmienna: number; // undefined
console.log(zmienna);

// dekladarcja
// deklaracja zminnych poprzez okreslenie wartości
zmienna = 10;

console.log('' == '0'); // false
console.log(0 == ''); // true
console.log('' === '0'); // false
console.log(0 === ''); // false

console.log({ a: 123 } == { a: 123 }); // False
console.log({ a: 123 } === { a: 123 }); // False
// porównywanie 2 obiektów
// zmienne wskazuja referencyjnie na obiekty w JS(Object Array RxExp
var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`
console.log(foo === bar); // true
console.log(foo === baz); // false

// Trutty
// Variable Type When it is falsy When it is truthy
// boolean'owe true i false chyba nie podlega dyskucji ;)

// number
if (123) {
  console.log('Kazdy numer poza 0 jest true');
}
// 0 lub NaN jest false
if (0) {
} else {
  console.log('0 traktowane jest jako false');
}

// string
if ('dowolny ciag') console.log('true');

if ('') {
} else {
  console.log('pusty ciąg jest false');
}

// null
if (null) {
} else {
  console.log('null jest zawsze false');
}

// undefined
if (undefined) {
} else {
  console.log('undefined jest zawsze false');
}

// Any other Object including empty ones like
// {} , []
if ({}) {
  console.log('Pusty obiekt {} [] jest zawsze true');
}

// The !! pattren
// pierwszy ! przekonwertuje na typ boolan jako false
// Drugi ! odwroci wartosc boolean z false na true
const name = '';
const hasName = !!name;
console.log(hasName);
