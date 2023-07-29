import TodoList from './todoCRUD';

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
    </li>
    <li class="todo-item">
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

  describe('Add item function', () => {
    test('Add first Item', () => {
      const initialLength = todoList.taskList.length;
      todoList.addItem('test 1');
      const list = document.querySelectorAll('.todo-list');
      expect(list.length).toBe(initialLength + 1);
    });
    test('Add second Item', () => {
      const initialLength = todoList.taskList.length;
      todoList.addItem('test 2');
      const list = document.querySelectorAll('.todo-list');
      expect(list.length).toBe(initialLength + 1);
    });
  });

  describe('Remove Item function', () => {
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
      const lastItemIndex = todoList.taskList.length-1;
      todoList.deleteItem(lastItemIndex);
      // Assertions
      expect(todoList.taskList).toEqual([
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
      ]);
    });
  });
});