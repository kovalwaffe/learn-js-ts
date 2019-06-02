// TYPY PODSTAWOWE
// boolean
// number
// string
// null
// undefined
// symbol

// TYPY REFERENYJNE
// object
// Array
// regexp

// boolean
// 0, pusty string, NaN, undefinded przyjmuja wartość: 'false'
// pozostale przymuja wartosc true
let isDone: boolean = true;
isDone = false;

// Deklarowanie typów poprawia jakość kodu i jego czytelność
// Typowanie poprawia proces refaktoryzacji - lepiej jak compiler znajdzie błąd
// Typowanie to jedna z najlepszych form dokumentacji.
// Sygnatura funkcji jest twierdzeniem, a dowodem jest ciało funkcyjne.
// Jednoczenie typowanie w TS jest opcjonalne.
// TS umożliwia korzystanie z przyszłych funkcji JS jakie wejdą w przyszłości

// Number
// Number jest liczba 64 bitowa z bitem znaku
// w tym 11 bitów połozenia dla przecinka rozdzielajacego część całkowitą i ułamkową.
// Liczba 64 bitowa podwójnej precyzji - część całkowita i ułamkowa.
// Tak naprawdę nie ma liczb całkowitych sa to liczby 64 bitowe podwójnej precyzji
// number - dziesiętne, hex, binarne, octal, zmiennoprzecinkowe
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let fixed: number = 1.5;

// Stringi
let color: string = 'red';
color = 'blur';

let tab: string[] = color.split('');
console.log(tab); // ['b','l','u','r']

let fullName: string = 'Paweł';
let age: number = 37;

// TUPLE - krotka, to tablica ktorej dlugosc oraz typ jej elementrów jest znany
// oraz kolejność tych elementów ma znaczenie
{
  let tuple: [string, number, boolean];
  tuple = ['Pablo', 38, true];
  console.log(tuple);
}
// Enum to typ wyliczeniowy, indeks zaczyna sie od "0".
// Enum to sposób nadawania bardziej przyjaznych nazw zestawom wartości liczbowych
enum Color {
  Red,
  Green,
  Blue
}

let numberColor: Color = Color.Red;
let nameColor: string = Color[numberColor];

console.log(`Kolor to ${nameColor}`);

// Any
// typy wyliczeniowe niepewne
// niweczy zalety typowania

let notSure: any = 4;
notSure = 'string';
notSure = null;

// VOID brak zwrotu
function mojaFunkcja(): void {
  console.log('hey');
  //return 1;    ERROR
}

// pusty typ - nie jest uzyteczny, bo mozna przypisac null lub undefined
let unusable: void = undefined;

// typy specjalne
// Something hasn't been initialized : undefined .
// Something is currently unavailable: null .
let u: undefined = undefined;
let n: null = null;
// In strict mode if you use foo and foo is undefined you
// get a ReferenceError exception and the whole call stack unwinds.

// typ NEVER
// Nigdy nie zostanie zwrócona wartość
function error(message: string): never {
  throw new Error(message);
}
// error('Bardzo straszny blad');

// NaN
// Niektórych wyliczeń nie da sie przedtawić jako 'number'
console.log(Math.sqrt(-1)); // NaN
// Note: Equality checks don't work on NaN values. Use Number.isNaN instead:
// Don't do this
console.log(NaN === NaN); // false!!
// Do this
console.log(Number.isNaN(NaN)); // true

// Object
// typ 'object' reprezentuje typ który nie jest typami prostymi
// tzn nie jest number, string, boolead, symbol, null i undefined
// With object type, APIs like Object.create can be better represented. For example:

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create('string'); // Error

// UNITYPY
let unityp: number | null | undefined = 2;
// unityp = 5;
console.log(unityp);

// Recommend == null to check for both undefined or null . You generally don't want to
// make a distinction between the two.
function foo(arg: string | null | undefined) {
  if (arg != null) {
    // arg must be a string as `!=` rules out both null and undefined.
  }
}
// W obiektach JSON uzywane sa null
// method converts a JavaScript object or value to a JSON string 
JSON.stringify({ willStay: null, willBeGone: undefined }); // {"willStay":null}

// TypeScript team doesn't use null : TypeScript coding guidelines and it hasn't caused any
// problems. Douglas Crockford thinks null is a bad idea and we should all just use
// undefined .