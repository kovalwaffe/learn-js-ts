{
  const string = 'hello';
  const number = 123;
  const boolean = true;
  const array = [1, '2', 3];
  const object = { one: 1 };
  const symbolValue = Symbol('123');
  const undefinedValue = undefined;
  const nullValue = null;

  {
    // Concat empty String
    string + ''; // 'hello'
    number + ''; // '123'
    boolean + ''; // 'true'
    array + ''; // '1,2,3'
    object + ''; // '[object Object]'
    undefinedValue + ''; // 'undefined'
    nullValue + ''; // 'null'

    // ⚠️
    symbolValue + ''; // ❌ TypeError
  }

  {
    // Template String
    `${string}`; // 'hello'
    `${number}`; // '123'
    `${boolean}`; // 'true'
    `${array}`; // '1,2,3'
    `${object}`; // '[object Object]'
    `${undefinedValue}`; // 'undefined'
    `${nullValue}`; // 'null'

    // ⚠️
    `${symbolValue}`; // ❌ TypeError
  }

  {
    // JSON.stringify()
    // ⚠️Nie jest zalecane
    JSON.stringify(string); // '"hello"'
    JSON.stringify(number); // '123'
    JSON.stringify(boolean); // 'true'
    JSON.stringify(array); // '[1,"2",3]'
    JSON.stringify(object); // '{"one":1}'
    JSON.stringify(nullValue); // 'null'
    JSON.stringify(symbolValue); // undefined
    JSON.stringify(undefinedValue); // undefined
  }

  {
    string.toString(); // 'hello'
    number.toString(); // '123'
    boolean.toString(); // 'true'
    array.toString(); // '1,2,3'
    object.toString(); // '[object Object]'
    symbolValue.toString(); // 'Symbol(123)'

    // ⚠️
    undefinedValue.toString(); // ❌ TypeError
    nullValue.toString(); // ❌ TypeError
  }

  {
    // Najlepszy spoósb :)
    String(string); // 'hello'
    String(number); // '123'
    String(boolean); // 'true'
    String(array); // '1,2,3'
    String(object); // '[object Object]'
    String(symbolValue); // 'Symbol(123)'
    String(undefinedValue); // 'undefined'
    String(nullValue); // 'null
  }
}
