// parseInt();
{
  let text: string = '42px';
  let integer: number = parseInt(text);
  console.log(typeof integer + ': ' + integer);
  // returns 42
}

// parseFloat()
{
  let text: string = '3.14someRandomStuff';
  let pointNum: number = parseFloat( text );
  console.log(typeof pointNum + ': ' + pointNum);
}

// Number()
// lepszy wybór
{
  // Convert strings
  Number('123'); // returns 123
  Number('12.3'); // returns 12.3
  Number('3.14someRandomStuff'); // returns NaN
  Number('42px'); // returns NaN
}