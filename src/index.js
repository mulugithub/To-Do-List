import './css/style.css';
import ToDoCRUD from './modules/todoCRUD.js';

const todo = new ToDoCRUD();
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('add-task').value;
  if (description !== '') {
    todo.addItem(description);
  }
});

document.getElementById('add-task').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = document.getElementById('add-task').value;
    if (description !== '') {
      todo.addItem(description);
    }
  }
});

todo.display();
