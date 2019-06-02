{
  // fn declaration - deklaracja funcji
  function add(x, y) {
    return x + y;
  }

  // fn expression - wyrażenie funkcyjne
  var add = function(x, y) {
    return x + y;
  };

  // Mozemy zapisać fukcje jako strzałkową
  var add = (x, y) => {
    return x + y;
  };

  // Mozemy uzyc f. strzałkowej jako anonimową
  users.map(function () {

  })
  
  users.map(() => {
  
  })
}
// Funkcje strzałkowe, fat arrows, lambda function
//
// Nie musisz pisać 'function'
// Wychwytuje znaczenie kontekstu jako 'this'
// Wychwytuje znaczenie kontekstu jako 'argument'

// Najważniejszą sprawą w funkcji strzałkowej jest to, że w odróżnieniu od klasycznych funkcj nie tworzy ona wiązania this.
// this brane jest z 'zewnatrz'
// uzywanie this ma sens w funkcjach zagnieżdzonych

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
}

let problem = new thisProblem();
let p1 = problem.printProblem1();
let p2 = problem.printProblem2();
p1(); //undefined, zakres this
p2();
