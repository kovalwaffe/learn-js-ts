// GRAWIS `
// TEPMLATE STRING
// 3 zalety:
// - interpolacja ciągów tekstowych
// - tekst wielowierszowy
// - osadzenie tagów w ciągach - przyklad 2

// PRZYKŁAD 1
let sentence: string = `Cześć nazywam sie ${fullName} \n
za rok będę miał ${age + 1}`;
console.log(sentence);

// PRZYKŁAD 2
var container = document.getElementById('container');

var todo = {
  id: 123,
  name: 'Pick up drycleaning',
  completed: true
};

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${
      todo.completed ? '' : 'hidden'
    } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`;
