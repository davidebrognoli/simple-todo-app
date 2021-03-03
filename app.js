const form = document.querySelector('form');
const todoInput = document.getElementById('todo');
const todos = document.querySelector('.todos');
let counter = document.querySelectorAll('.todos li').length;

const addTodo = (todo) => {
  if (todo) {
    const template = document.querySelector('#template .todo');
    const liNode = template.cloneNode(true);
    counter++;
    const nodeId = `item-${counter + 1}`;
    liNode.children[0].setAttribute('id', nodeId);
    liNode.children[1].setAttribute('for', nodeId)
    liNode.children[1].innerText = todo;
    todos.appendChild(liNode);
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const todoValue = todoInput.value;
  addTodo(todoValue);
  todoInput.value = '';
})

todos.addEventListener('click', (evt) => {
  const target = evt.target;
  const validTarget = ['button', 'svg', 'path']
  if (validTarget.includes(target.tagName.toLowerCase())){
    const liNode = target.closest('li');
    liNode.remove();
  }
})