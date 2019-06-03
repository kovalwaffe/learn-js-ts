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