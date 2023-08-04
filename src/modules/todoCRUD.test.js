import TodoList from './todoCRUD';
import updateCompletedStatus from './updateStatus';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();

// Mock DOM elements
document.body.innerHTML = `
  <ul class="todo-list">
    <li class="todo-item">
    <span></span>
    </li>
    <li class="todo-item">
    <span></span>
    </li>
    <li class="todo-item">
    <span></span>
    </li>
  </ul>
`;

describe('TodoList', () => {
  let todoList;
  beforeEach(() => {
    // Clear localStorage and taskList before each test
    localStorageMock.clear();
    todoList = new TodoList();
    todoList.taskList = [];
  });

  describe('Add item method', () => {
    test('Add first task in the list', () => {
      const initialLength = todoList.taskList.length;
      todoList.addItem('test 1');
      const list = document.querySelectorAll('.todo-list');
      expect(list.length).toBe(initialLength + 1);
    });
    test('Add second task in the list', () => {
      const initialLength = todoList.taskList.length;
      todoList.addItem('test 2');
      const list = document.querySelectorAll('.todo-list');
      expect(list.length).toBe(initialLength + 1);
    });
  });

  describe('Remove Item method', () => {
    localStorage.clear();
    beforeEach(() => {
      // Initialize
      todoList.taskList.push({ description: 'Task 1', completed: false, index: 1 });
      todoList.taskList.push({ description: 'Task 2', completed: false, index: 2 });
      todoList.taskList.push({ description: 'Task 3', completed: false, index: 3 });
    });

    test('should remove the task at the beginning of the todo list', () => {
      // Call the function to remove the first task
      todoList.deleteItem(0);
      // Assertions
      expect(todoList.taskList).toEqual([
        { description: 'Task 2', completed: false, index: 1 },
        { description: 'Task 3', completed: false, index: 2 },
      ]);
    });

    test('should remove the task at the specified index', () => {
      // Call the function to remove at index 1
      todoList.deleteItem(1);
      // Assertions
      expect(todoList.taskList).toEqual([
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 3', completed: false, index: 2 },
      ]);
    });

    test('should remove the task at the end of the todo list', () => {
      // Call the function to remove at the end of the list
      const lastItemIndex = todoList.taskList.length - 1;
      todoList.deleteItem(lastItemIndex);
      // Assertions
      expect(todoList.taskList).toEqual([
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
      ]);
    });
  });
  // Edit Task Description function
  describe('Edit Task Description function', () => {
    localStorageMock.clear();
    test('Edit the first task', () => {
      todoList.addItem('task one');
      const input = { value: 'task 1' };
      todoList.updateInput(0, input);
      // Assertions
      expect(todoList.taskList[0].description).toEqual('task 1');
    });

    test('Edit the last task', () => {
      todoList.addItem('task two');
      const input = { value: 'task 2' };
      todoList.updateInput(todoList.taskList.length - 1, input);
      // Assertions
      expect(todoList.taskList[todoList.taskList.length - 1].description).toEqual('task 2');
    });
  });

  describe('updateCompletedStatus', () => {
    localStorageMock.clear();
    beforeEach(() => {
      // Initialize
      todoList.taskList.push({ description: 'Task 1', completed: false, index: 1 });
      todoList.taskList.push({ description: 'Task 2', completed: false, index: 2 });
      todoList.taskList.push({ description: 'Task 3', completed: true, index: 3 });
    });
    test('Check if todo status changes on completion', () => {
      let firstTodoItem = document.querySelector('.todo-list .todo-item span');
      updateCompletedStatus(firstTodoItem, todoList.taskList, 0);
      firstTodoItem = document.querySelector('.todo-list li:nth-child(1)');
      expect(todoList.taskList[0].completed).toBe(true); // Updated assertion
      expect(todoList.taskList).toEqual([
        { description: 'Task 1', completed: true, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
        { description: 'Task 3', completed: true, index: 3 },
      ]);
    });
  });

  describe('Clear all completed tasks', () => {
    // Mock the checkbox element
    let checkbox;
    beforeEach(() => {
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = true;
      // Add the checkbox to the DOM
      document.body.appendChild(checkbox);

      // Initialize the task list
      todoList.taskList = [
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 2', completed: true, index: 2 },
        { description: 'Task 3', completed: true, index: 3 },
      ];
    });

    afterEach(() => {
      // Remove the checkbox from the DOM
      document.body.removeChild(checkbox);
    });

    
    test('Clear completed tasks when checkbox is checked', () => {
      // Simulate a click on the checkbox
      checkbox.click();

      // Call the clearCompleted method
      todoList.clearCompleted();

      // Assertions
      expect(todoList.taskList).toEqual([
        { description: 'Task 2', completed: false, index: 1 },
        { description: 'Task 3', completed: false, index: 2 },
      ]);
      expect(document.querySelectorAll('.todo-list .todo-item').length).toBe(2);
    });
  });
});