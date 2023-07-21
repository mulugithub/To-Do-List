import Todo from './Todo-object.js';
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
        const checkmark = document.createElement('span');
        const moveBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const ellipsisIcon = document.createElement('i');
        const trashIcon = document.createElement('i');

        todoItem.classList.add('todo-item');
        input.classList.add('description');

        task.index = index + 1;

        input.value = `${task.description}`;
        ellipsisIcon.className = 'fa-solid fa-ellipsis-vertical';
        trashIcon.className = 'fa-regular fa-trash-can';
        deleteBtn.classList.add('hidden');
        checkmark.classList.add('checkmark');

        moveBtn.appendChild(ellipsisIcon);
        deleteBtn.appendChild(trashIcon);
        todoItem.appendChild(checkmark);
        todoItem.appendChild(input);
        todoItem.appendChild(deleteBtn);
        todoItem.appendChild(moveBtn);

        // Delete todo list item when user click on deleteBtn
        deleteBtn.addEventListener('click', () => {
          this.deleteItem(index);
        });

        input.addEventListener('click', () => {
          document.querySelectorAll('li').forEach((element) => {
            element.classList.remove('list-highlight');
          });
          todoItem.classList.add('list-highlight');
          checkmark.classList.add('darken');
          moveBtn.classList.add('hidden');
          deleteBtn.classList.remove('hidden');
        });

        input.addEventListener('blur', () => {
          document.querySelectorAll('li').forEach((element) => {
            element.classList.remove('list-highlight');
          });
          checkmark.classList.remove('darken');
          setTimeout(() => {
            deleteBtn.classList.add('hidden');
            moveBtn.classList.remove('hidden');
          }, 300);
        });

        input.addEventListener('keyup', () => this.updateInput(index, input));

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
