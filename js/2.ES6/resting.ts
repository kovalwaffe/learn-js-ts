// REASTING AND SPREADING

// 1. Dodanie właściwości przy klonowaniu obiektu
{
  const user = { id: 100, name: 'Howard Moon' };
  const userWithPass = { ...user, password: 'Password!' };

  console.log(user); //=> { id: 100, name: 'Howard Moon' }
  console.log(userWithPass); //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
}

// 2. Scalanie (Merge) obiektów
{
  const part1 = { id: 100, name: 'Howard Moon' };
  const part2 = { id: 101, password: 'Password!' };

  const user1 = { ...part1, ...part2 };
  //=> { id: 101, name: 'Howard Moon', password: 'Password!' }
  console.log(user1);

  const partial = { id: 100, name: 'Howard Moon' };
  const user = { ...partial, id: 100, password: 'Password!' };
  console.log(user);
}

// 3. Wykluczenie własciwosci obiektu
// Właściwość można usunać za pomoca destrukcji z połączeniem z operatorem rest
{
  const noPassword = ({ password, ...rest }) => rest;
  const user = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
  };

  noPassword(user); //=> { id: 100, name: 'Howard moon' }
}

// 4. Dynamiczne wykluczenie właściwości
{
  const user1 = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
  };
  const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
  //                     ----       ------
  //                          \   /
  //                dynamic destructuring

  const removePassword = removeProperty('password');
  const removeId = removeProperty('id');

  removePassword(user1); //=> { id: 100, name: 'Howard Moon' }
  removeId(user1); //=> { name: 'Howard Moon', password: 'Password!' }
}

// 5. Uporzadkowanie kolejność właściwości
// Wlasciwosci mozemy przesuwac na początek lub na koniec listy właściwości
{
  const user3 = {
    password: 'Password!',
    name: 'Naboo',
    id: 300
  };

  const organize = object => ({ id: undefined, ...object });
  //                            -------------
  //                          /
  //  move id to the first property

  organize(user3);
  //=> { id: 300, password: 'Password!', name: 'Naboo' }
}

// 6. Domyślne właściwości
// Funkcja setDefault ustawi domyślne właściwości nawet gdy nie wystepują w obiekcie
{
  const user2 = {
    id: 200,
    name: 'Vince Noir'
  };

  const user4 = {
    id: 400,
    name: 'Bollo',
    quotes: ["I've got a bad feeling about this..."]
  };

  const setDefaults = ({ quotes = [], ...object }) => ({ ...object, quotes });

  setDefaults(user2);
  //=> { id: 200, name: 'Vince Noir', quotes: [] }

  setDefaults(user4);
  //=> {
  //=>   id: 400,
  //=>   name: 'Bollo',
  //=>   quotes: ["I've got a bad feeling about this..."]
  //=> }
}

// 7. Zmiana nazwy właściwości obiektu
{
  const renamed = ({ ID, ...object }) => ({ id: ID, ...object });

  const user = {
    ID: 500,
    name: 'Bob Fossil'
  };

  renamed(user); //=> { id: 500, name: 'Bob Fossil' }
  console.log(user);
  console.log(renamed(user));
}

// 8. Dodanie warunkowo wlaściwości do obiektu
// Właściwość 'password' bedzie dodana tylko jak istnieje (truthy)
{
  const user = { id: 100, name: 'Howard Moon' };
  const password = 'Password!';
  const userWithPassword = {
    ...user,
    id: 100,
    ...(password && { password })
  };

  userWithPassword; //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
}
