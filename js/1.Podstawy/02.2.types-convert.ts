// Konwersja JS
// Number - wbudowana fukcja
{
  let a = '42';
  var b = Number(a);
}

// String
{
  let amount = 99.99;

  amount = amount * 2;

  console.log(amount); // 199.98

  // convert `amount` to a string, and
  // add "$" on the beginning

  let amountStr = '$' + String(amount);

  console.log(amountStr); // $199.98
}

// toFixed()
{
  let TAX_RATE = 0.08; // 8% sales tax

  let amount = 99.99;

  amount = amount * 2;

  amount = amount + amount * TAX_RATE;

  console.log(amount); // 215.9784
  console.log(amount.toFixed(2)); // "215.98"
}

// ASERCJE
// Zmienne które pochodzą z innych blibliotek JS nie posiadaja typu zmiennej.
// Mechanizm type assertion pozwala zasugerować compilatorowi,
// że wiemy z jakim typem mamy doczynienia.
{
  let notSure = 'Jakas taka niepewna';
  let srtLength: number = (<string>notSure).length;
  console.log(srtLength);
  // AS
  // Asercja w TS
  let srtLength2: number = (notSure as string).length;
  console.log(srtLength2);
}