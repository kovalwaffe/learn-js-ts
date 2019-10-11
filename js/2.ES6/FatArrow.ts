{
  // fn declaration - deklaracja funcji
  function add1(x, y) {
    return x + y;
  }

  // fn expression - wyrażenie funkcyjne
  var add2 = function(x, y) {
    return x + y;
  };

  // Mozemy zapisać fukcje jako strzałkową
  var add3 = (x, y) => {
    return x + y;
  };

  // Mozemy uzyc f. strzałkowej jako anonimową
  users.map(function() {});

  users.map(() => {});
}
// Funkcje strzałkowe, fat arrows, lambda function
//
// Funkcja strzałkowa tyczy się tylko wyrażeń funkcyjnych. Dla definicji nie może być użyta.
{
  const myFunction = () => {
    console.log(a, b);
  };
}
// Nie musisz pisać 'function', funkcja na skrócony zapis
// Wychwytuje znaczenie kontekstu jako 'this'
// nie zmienia w swoim wnętrzu kontekstu this biorąc je z otaczającego ją środowiska.
{
  const obj = {
    pets: ['kot', 'pies', 'chomik'],
    bindBtn: function() {
      const button = document.createElement('button');
      button.innerText = 'Kliknij';
      button.type = 'button';
      document.body.appendChild(this.button);

      button.addEventListener('click', () => {
        //funkcja strzałkowa
        console.log(this.pets);
      });
    }
  };

  obj.bindBtn();
}
// Wychwytuje znaczenie kontekstu jako 'argument'

// Jeżeli jedyną instrukcją funkcji jest ta zwracająca, możemy pominąć słowo return:
// Gdy funkcja nie ma atrybutów
{
  const myF = function() {
    return 'ala ma kota';
  };
  const myF = () => 'ala ma kota';
  // przy 1 atrybucie nawiasy nie sa potrzebne
  const myF = a => 'ala ma kota';
}

// Najważniejszą sprawą w funkcji strzałkowej jest to, że w odróżnieniu od klasycznych funkcji nie tworzy ona wiązania 'this'.
// 'this' brane jest z 'zewnatrz'
// uzywanie 'this' ma sens w funkcjach zagnieżdzonych
// wewnątrz funkcji zmienna 'this' zazwyczaj wskazuje na obiekt,
// który daną metodę wywołał ( czyli znajduje się przed kropką np.ob.print() ):

{
  const ob = {
    name: 'Batman',
    printName: () => {
      //nie zachodzi wiązanie - this === window
      console.log(this.name);
    }
  };

  ob.printName(); // undefined
}

{
  const ob = {
    name: 'Batman',

    btn() {
      const btn = document.querySelector( '.btn' );
      
      btn.addEventListener( 'click', () => {
        // This wskazuje np na widow.
        // Normalnie this wskazywało by na kliknięty btn
        // dzięki zastosowaniu funkcji strzałkowej, pod this
        // trafił zewnętrzny kontekst, czyli nasz obiekt ob.

        console.log(this.name); //Batman
      });
    }
  };
}

class thisProblem {
  public msg: string = 'hello world';

  printProblem1() {
    return function() {
      console.log(this.msg);
    };
  }

  printProblem2() {
    return () => {
      console.log(this.msg);
    };
  }

  printProblem3() {
    // nie musi byc return
    // brak klamr oznacza ze sugerujemy to co zostanie zwórcone z funkcji
    return () => this.msg;
  }
}

let problem = new thisProblem();
let p1 = problem.printProblem1();
let p2 = problem.printProblem2();
let p3 = problem.printProblem3();
p1(); //undefined, zakres this
p2();
p3();
