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

// Number jest liczba 64 bitowa z bitem znaku + 11 bitów połozenia przecinek rozdzielajacy
// czesc całkowitą i ułamkową
// Tak naprawde nie ma liczb całkowitych sa to liczby 64 bitowe podwójnej precyzji
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
console.log(tablica); // ['b','l','u','r']

let fullName: string = 'Paweł';
let age: number = 37;

// GRAWIS ` 
// TEPMLATE STRING
let sentence: string = `Cześć nazywam sie ${fullName} \n
za rok będę miał ${age + 1}`;
console.log(sentence);

// Enum to typ wyliczeniowy, indeks zaczyna sie od "0"
enum Color { Red, Green, Blue };

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

// typy specjalne 
let u: undefined = undefined;
let n: null = null;

// UNITYPY
let unityp: number | null | undefined = 2;
//unityp = 5;
console.log(unityp);

// typ NEVER
function error(message: string): never {
    throw new Error(message);
}
// error('Bardzo straszny blad');

// TUPLE - krotka, to tablica ktorej dlugosc oraz typ jej elementróew jest znanny
// kolejnosc elementów ma znaczenie
let tuple: [string, number, boolean];
tuple = ['Pablo',38,true];
console.log(tuple);

// ASERCJE
// zmienne tkore pochodza z innych blibliotej JS nie posiadaja typy zmienne
// mechanizm type assertion
notSure = 'Jakas taka niepewna';
let srtLength: number = (<string>notSure).length;
console.log(srtLength);
// AS
// Asercja w TS
let srtLength2: number = (notSure as string).length;
console.log(srtLength2);
