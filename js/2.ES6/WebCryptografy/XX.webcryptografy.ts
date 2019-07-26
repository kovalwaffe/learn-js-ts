// const utf8 = require( 'utf8' );
import { UTF8 } from 'utf-8';
// Web Cryptografy
// DOstepne dla połączenia HTTPS - objekt crypto zwróci null or undefined i bedzie niedostępny
// Metody cryptograficzne generują i zwracają stringi albo objekty
// Prawie wszystkie operacje zwracaja 'Promises'

// Metoda bezpieczniejsza niz uzycie biblioteki Math
// const key = window.crypto.getRandomValues();

{
  const empty = new Uint8Array(16);
  const fixed = new Uint8Array([34, 56, 212, 300]);
  // const text = UTF8.encode( 'text' );

  console.log(fixed);
}

// CrpytoKey - reprezentacja kryptograficznego klucza
// type: string - public or privete, extarablalbe ,symetric,
// extratable: boolean - true mozesz exportowacv klucz
// algoritm:  string or object - AES KEY -> doc
// usages: array of strings - decrypt/encrypt - jak go uzyjesz?

// Algorytm AES oznacza symetric - terz sam klucz mozna uzyc do szyfrowania i deszyfrowania danych

// Algoprytm AES_256 GCM
// AES-GCM CryptoKey 256 bit = 32 bytes
// Initialization Vector 56 bit = 12 bytes

// PBKDF2 - password based key derivation function 2
// bardzo  dobre szyfrowanie dla hasle , odpornosc na brutal-force attaki

// Encrypt
//
// User Adds Data
// User Entres Password

  function encryptData(secretData, password) {
    const dataAsBytes = UTF8.encode(secretData);
    const passwordAsBytes = UTF8.encode(password);
  }
  encryptData('tajne dane', 'haslo');

// Convert Password to CryptoKey
// Derive AES Key
// Encrypt data


// JSON Web Token to otwarty, przemysłowy standard RFC 7519, który
// definiuje zwiezyły i samowystarczalny sposób na bezpiecznie przekazanie
// informacji pomiedzy dwiema stronami w formie obiektu JSON.
// Taka przekazana informacja moze byc zweryfikowana poniewaz jest cyfrowo
// podpisana.
// JWT moze byc podpisany uzywajac tajnego klucza (algorytm HMAC) albo
// przy pomocy pray kluczy publiczny/prywatny uzywajac algorytmu RSA.
// jwt.io pozwala na dekodowanie, weryfikacje i generowanie JWT.

// Mały rozmiar - pozwala na przesyłanie tokentów:
// - w adresie URL,
// - jako parametry metody POST,
// - w nagłówku protokołu HTTP.
// Samodzielny - JWT zawiera wszystkie potrzebne do weryfikacji informacje,
// nie ma potrzeby dodatkowego łaczenia sie np. z baza danych.

// Kiedy warto uzywac?
// - Uwierzytelnienie - najczestszy scenariusz dla JWT. Jedno zalogowanie sie
// wystarczy do uzyskania JWT i wielokrotnego dostepu do danych przy uzyciu
// tokenu. Mozna łatwo uzywac nawet dla wielu domen.
// - Wymiana informacji - dobrze nadaje sie w wymianie informacji miedzy
// stronami, moze byc podpisany z uzyciem pary kluczy publiczny/prywatny.
// Mamy pewnosc nadawcy. Mamy tez pewnosc, ze odebrane dane (nagłówek i
// ładunek) sa nienaruszone
