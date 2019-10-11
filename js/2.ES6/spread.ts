//rozbijanie tablicy na poszczególne liczby
{
  const tab = [1, 2, 3, 4];
  console.log(...tab);
}
//rozdzielanie teksty na poszczególne litery
{
  const str = 'Ala ma kota';
  const tab = [...str]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]
}
//spread parametr słuzy do podanie nienananej ilości paramterów
{
  function add(action, ...values) {}
  let wynik = add(1, 2, 3);
  console.log(wynik);
}
