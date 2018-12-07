class thisProblem {
  msg: string = 'hello world';

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
