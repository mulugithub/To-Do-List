const renderTasks = (tasks) => {
  const taskList = document.getElementById('task-list');
  const ul = document.createElement('ul');
  tasks.sort((a, b) => a.index - b.index).forEach((task) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = task.completed;
    input.classList.add('checkbox');
    const span = document.createElement('span');
    span.textContent = task.description;
    li.appendChild(input);
    li.appendChild(span);
    ul.appendChild(li);
  });
  taskList.appendChild(ul);
};

export default renderTasks;