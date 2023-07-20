const tasks = [
  { description: 'wash the dishes', completed: true, index: 1 },
  { description: 'complete To Do list project', completed: false, index: 2 },
];

function renderTasks() {
  const todoList = document.querySelector('.todo-list');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    if (task.completed) {
      checkboxInput.classList.add('task-checkBox');
      todoItem.classList.add('completed-task');
    }

    const todoDescription = document.createElement('span');
    todoDescription.textContent = task.description;
    todoDescription.classList.add('description');

    const ellispsisIcon = document.createElement('i');
    ellispsisIcon.className = 'fa-solid fa-ellipsis-vertical';
    ellispsisIcon.classList.add('ellispsis-icon');

    todoItem.appendChild(checkboxInput);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(ellispsisIcon);
    todoList.appendChild(todoItem);
  });
}

export default renderTasks;