//readonly parametr jest tylko do odczytu i nie mozna zmienic wartosci
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };

// p.x = 30; Error

console.log(p1);

let a: number[] = [1, 2, 3, 4];
// specjalny typ rzutowania aby tablica byla ReadOnly
let ro: ReadonlyArray<number> = a;
a[0] = 1;
//ro[1] = 1; Error

// interface definiujacy funkcje
interface SearchFunc {
  (source: string, subString): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: String) {
  return true;
};
