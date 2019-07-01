// PROMISE
// Akcja asynchromiczna - resultat może nie pojawić sie od razu,a w miedzyczasie moga pojawić sie inne akcje
// Obiektnica została dotrzymana lub nie albo status obietnicy nigdy sie nie zmini.
// Obietnica reprezentuje wartośc akcji, która nie została jeszcze ukończona
// Na poczatku jest w stanie 'pending' - w trakcie oczekiwania na rozwiazanie
// Statusy: Resolved(rozwiązana) albo Rejected(nie dotrzymana)
// Obietnica ma wartość obiektu ze stanem. Nie możemy zmienić stanu obiektnicy.
// Obiekt reprezentujacy przyszła wartość
// Jak widzisz w parametrze Promise przekazujemy funkcję, która ma 2 opcjonalne parametry. Są nimi funkcje, które będą wywoływane w momencie zakończenia działania Promisa.
// Każda obietnica może zakończyć się na dwa sposoby - powodzeniem i niepowodzeniem.
// Gdy obietnica zakończy się powodzeniem (np. dane się wczytają), powinniśmy wywołać funkcję resolve(), do której przekażemy poprawny rezultat.
// W przypadku błędów powinniśmy wywołać funkcję reject(), do której trafią błędne dane.
{
  const promise = new Promise((resolve, reject) => {});

  console.log(promise);
  //   Promise {<pending>}
  // __proto__: Promise
  // [[PromiseStatus]]: "pending" - status obietnicy w zaleznosci od statusów Resolved(rozwiązana) albo Rejected(nie dotrzymana)
  // [[PromiseValue]]: undefined  - początkowo ustawiona undefined
}

// Dotrzymajmy obietnicy
// funkcja then zwraca obietnice
{
  const promise = new Promise((resolve, reject) => {
    resolve('Dotrzymana');
  });
  promise.then(result => console.log(result));

  console.log('console.log: ');
  console.log(promise);
}

// Obietnica odrzucona
{
  const promise = new Promise((resolve, reject) => {
    reject(new Error('Oppsss!'));
  });
  promise.then(
    // dwa Callbacki
    result => console.log(result),
    reject => console.log(reject)
  );

  console.log('console.log: ');
  console.log(promise);
}

// Obietnica odrzucona - funkcja Catch
{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dotrzymana !');
    }, 2000);
  });
  promise
    .then(result => console.log(result))
    .catch(reason => console.log(reason));
  console.log('console.log: ');
  console.log(promise);
}

// Chaining obietnic
{
  const p = new Promise((resolve, reject) => {
    resolve(5);
  });

  p.then(result => result * 2)
    .then(result => result * 3)
    .then(result => result + 3)
    .then(result => console.log(result))
    .finally(() => console.log('finished!'));
}

// Statyczne metody
// Promise.resolve() - od razu obietnica jest dotrzymana
// Obietnica jest odrzucoina jezeli została przekazana obietnica odrzucona
// const promise = Promise.resolve(Promise.reject(Error('Ooops!')));
{
  const promise = Promise.resolve(50);
  console.log(promise);
}

// Async
// Zwróci zawsze obiekt Promise
{
  async function foo() {
    return 1; // zapis jest rónożnaczny z: Promise.resolve(1);
  }

  foo().then(result => console.log(result));
}

// Await
{
  // anync musi byc jezeli korzystamy z await
  async function foo () {
    // await sprawia ze co zmiennej przypisywana jest wartość z promisa a nie sam promise(okiekt)
    const promise = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('finished!'), 1000);
    });
    console.log(promise);
  }
  foo();
}
