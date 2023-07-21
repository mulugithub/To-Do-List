const saveData = (todoList) => {
  localStorage.setItem('To-Do-List', JSON.stringify(todoList));
};
const loadData = () => JSON.parse(localStorage.getItem('To-Do-List')) || [];
export { saveData, loadData };