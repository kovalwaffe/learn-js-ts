// Następujące metody pobierają funkcję wywołania zwrotnego jako argument,
// który zostanie wykonany dla każdego elementu tablicy.
{
  let data = [
    { id: 1, name: 'Phone', type: 'electronic' },
    { id: 2, name: 'Laptop', type: 'electronic' },
    { id: 3, name: 'Shirt', type: 'clothing' }
  ];
  let arr = [1, 2, 3, 4, 5];

  {
    // 1. Array.forEach()
    // For-each pobiera wywołanie zwrotne jako argument i wykonuje go dla każdego elementu tablicy.
    // display index and value
    arr.forEach((value, index) =>
      console.log(`Index = ${index} Value = ${value}`)
    );
  }

  {
    // 2. Array.map()
    // Aby przekształcić istniejącą tablicę w inną formę, można użyć metody array.map().
    // Metoda map () pobiera wywołanie zwrotne jako argument i zwraca nową tablicę.
    // Elementy w nowej tablicy będą wartościami, które zostały zwrócone przez wywołanie zwrotne.
    let ids = data.map(function(val) {
      return val.id;
    });
    console.log(ids);
  }

  {
    // 3. Filtering elements from the array
    // Metoda filter() oczekuje wywołania zwrotnego, to wywołanie zwrotne zostanie wykonane dla każdego elementu w tablicy
    // i zwróci nową tablicę zawierającą przefiltrowane elementy.
    // Jeśli funkcja zwrotna zwróci wartość true dla danego elementu, element ten będzie znajdował się w tablicy filtrowanej.
    let electronics = data.filter(item => item.type == 'electronic');
    console.log(electronics);
  }

  {
    // Array.find()
    // Jeśli chcesz wyszukać element w tablicy, możesz użyć metody Array.find()
    // Funkcja zwrotna powinna zwracać wartość true lub false.
    // Pierwsza wartość, dla której wywołanie zwrotne zwraca wartość true, będzie wynikiem tej metody.
    // Jeśli nie ma dopasowania, funkcja zwróci wartość niezdefiniowaną.

    let find = data.find(val => val.name == 'Phone');
    console.log(find);
  }
  {
    // Array.reduce()
    // Getting a single value from an array
    // Aby uzyskać pojedynczą wartość z tablicy, można użyć metody array.reduce ().
    // Metoda reduction () pobiera funkcję zwrotną, wartość początkową jako argument.
    let arr = [1, 2, 3, 4, 5];

    //sum of array elements
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // where 0 is the initial value
    // Output: 15

    // product of array elements
    arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    // Output: 120
  }

  {
    // Array.every()
    // Sprawdzanie, czy warunek jest prawdziwy dla wszystkich elementów tablicy W tym celu użyj metody array.every ().
    // Ta metoda zwróci true, jeśli warunek jest prawdziwy dla wszystkich elementów tablicy, w przeciwnym razie zwróci false.
    let giftPrices = [300, 350, 399, 400];
    let budgetPerGift = 450;

    let checkBudget = price => price <= budgetPerGift;

    giftPrices.every(checkBudget); // true

    budgetPerGift = 300;

    giftPrices.every(checkBudget); // false
  }
}
