import Todo from './Todo-object.js';
import updateStatus from './updateStatus.js';
import { saveData, loadData } from './localStorage.js';

class TodoList {
  constructor() {
    this.taskList = [];
  }

   // Add new item to To-Do List
   addItem = (description) => {
     this.taskList.push(new Todo(description, this.taskList.length));
     saveData(this.taskList);
     this.display();
     document.getElementById('add-task').value = '';
   };

   // Delete todo item
   deleteItem = (index) => {
     this.taskList.splice(index, 1);

     // Update indexes of remaining items
     this.taskList.slice(index).forEach((item, i) => {
       item.index = index + i + 1;
     });
     saveData(this.taskList);
     this.display();
   };

   // update to do list
    updateInput = (index, input) => {
      this.taskList[index].description = input.value;
      saveData(this.taskList);
    };

    // clear all completed  task from list
    clearCompleted = () => {
      this.taskList = loadData();
      const incompleteTasks = this.taskList.filter((todo) => !todo.completed);
      this.taskList = incompleteTasks;
      // Update indexes of incomplete tasks
      incompleteTasks.forEach((todo, index) => {
        todo.index = index + 1;
      });
      saveData(incompleteTasks);
      this.display();
    };

    // render todo list item
    renderList = (arr) => {
      const todoList = document.querySelector('.todo-list');
      todoList.innerHTML = '';
      // copy all to do list
      const sortedArr = [...arr];
      // sort todo list based on index
      sortedArr.sort((a, b) => a.index - b.index);

      const todoItems = sortedArr.map((task, index) => {
        const todoItem = document.createElement('li');
        const input = document.createElement('input');
        const todoCheck = document.createElement('span');
        const todoMoveBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const ellipsisIcon = document.createElement('i');
        const trashIcon = document.createElement('i');

        todoItem.classList.add('todo-item');
        input.classList.add('description');
        todoMoveBtn.classList.add('todo-move');
        deleteBtn.classList.add('todo-delete');

        task.index = index + 1;
        if (task.completed) {
          todoCheck.classList.add('checked');
          input.classList.add('completed-task');
        }

        input.value = `${task.description}`;
        ellipsisIcon.className = 'fa-solid fa-ellipsis-vertical';
        trashIcon.className = 'fa-regular fa-trash-can';
        deleteBtn.classList.add('hidden');
        todoCheck.classList.add('todoCheck');

        todoMoveBtn.appendChild(ellipsisIcon);
        deleteBtn.appendChild(trashIcon);
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(input);
        todoItem.appendChild(deleteBtn);
        todoItem.appendChild(todoMoveBtn);

        // Delete todo list item when user click on deleteBtn
        deleteBtn.addEventListener('click', () => {
          this.deleteItem(index);
        });

        input.addEventListener('click', () => {
          document.querySelectorAll('li').forEach((element) => {
            element.classList.remove('list-highlight');
          });
          todoItem.classList.add('list-highlight');
          todoCheck.classList.add('darken');
          todoMoveBtn.classList.add('hidden');
          deleteBtn.classList.remove('hidden');
        });

        input.addEventListener('blur', () => {
          document.querySelectorAll('li').forEach((element) => {
            element.classList.remove('list-highlight');
            element.classList.add('completed-task');
          });
          todoCheck.classList.remove('darken');
          setTimeout(() => {
            deleteBtn.classList.add('hidden');
            todoMoveBtn.classList.remove('hidden');
          }, 300);
        });

        input.addEventListener('keyup', () => this.updateInput(index, input));
        todoCheck.addEventListener('click', () => updateStatus(todoCheck, sortedArr, index));
        return todoItem;
      });
        // Append all elements to the todoList at once
      todoList.append(...todoItems);
    };

    display = () => {
      this.renderList(loadData());
    };
}
export default TodoList;
