const text: string = "Ala ma kota, a kot ma Ale";

//dlugość ciągu
console.log(text.length);
// string -> Array
const tablicaZnakow: string[] = text.split(' ');
console.log(tablicaZnakow);


// Zwraca wybrany znak - przyjumje nr indeksu - numeracja zaczyna sie od 0
console.log(text.charAt(0)); //A
console.log(text.charAt(4)); //m

let s: string;                      //Declare variables.
const d: Date = new Date();                //Create Date object.
s = `Current setting is 
${d.toLocaleString()}`;       //Convert to current locale.
console.log(s);

let message1 = `    abc def     \r\n  `;

console.log("\"" + message1.trim() + "\"");
