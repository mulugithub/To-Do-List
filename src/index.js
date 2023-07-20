import renderTaskList from './modules/renderTasks.js';
import './css/style.css';

const tasks = [
  { description: 'wash the dishes', completed: true, index: 1 },
  { description: 'complete To Do list project', completed: false, index: 2 },
];

renderTaskList(tasks);
