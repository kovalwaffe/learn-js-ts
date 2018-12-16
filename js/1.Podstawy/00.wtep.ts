// TypeScript jest nadzbiorem jezyka JS
// TS jest transpilowany do JS 

// Zalety TS:
// TS chorni przed rzeczami ktore nie powinny dziac np.
[] + [];  // '' 
// TS zwroci blad
{} + []; // JS : 0, TS Error
[] + {}; // JS : "[object Object]", TS Error
{} + {}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
"hello" - 1; // JS : NaN, TS Error

// inicjalicacja
// dekladarcja

console.log("" == "0"); // false
console.log(0 == ""); // true
console.log("" === "0"); // false
console.log(0 === ""); // false

console.log({a:123} == {a:123}); // False
console.log({a:123} === {a:123}); // False
// porównywanie 2 obiektów 
// zmienne wskazuja referencyjnie na obiekty w JS(Object Array RxExp
var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`
console.log(foo === bar); // true
console.log(foo === baz); // false

// Trutty
// Variable Type When it is falsy When it is
// truthy
// boolean false true
// string '' (empty
//string) any other string
//number 0 NaN any other
//number
//null always never
//undefined always never
//Any other Object including empty ones like
//{} , []
//never always