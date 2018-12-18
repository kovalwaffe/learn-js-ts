// TypeScript jest nadzbiorem jezyka JS
// TS jest transpilowany do JS

// Zalety TS:
// TS chroni przed rzeczami ktore nie powinny się dziać np.
[] + []; // ''
// TS będzie zwracać błąd
{} + []; // JS : 0, TS Error
[] + {}; // JS : "[object Object]", TS Error
{} + {}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
'hello' - 1; // JS : NaN, TS Error

// Inicjalicacja zmiennej
// Zmienne domyslenie sa inicjowana jako 'undefined' - nie posiadają wartości.
var zmienna: number; // undefined
console.log(zmienna);

// Dekladarcja zmiennej
// deklaracja zminnych poprzez okreslenie wartości
zmienna = 10;

console.log('' == '0'); // false
console.log(0 == ''); // true
console.log('' === '0'); // false
console.log(0 === ''); // false

console.log({ a: 123 } == { a: 123 }); // False
console.log({ a: 123 } === { a: 123 }); // False
// porównywanie 2 obiektów
// zmienne wskazuja referencyjnie na rózne obiekty w JS(Object Array RxExp)
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
if ('dowolny ciag') console.log('dowolny ciąg jest true');

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
// Pierwszy znak ! przekonwertuje typ boolan oraz z negacją.
// Aby opdrócic negacje dodajemy drugi znak ! ,który odwroci wartosc 
// typu boolean na przeciwną i jednocześnie włąściwą.
const myName = '';
const hasName = !!myName;
console.log(hasName);
