import { saveData } from './localStorage.js';

const updateStatus = (todoCheck, sortedArr, i) => {
  // if (!todoCheck) {
  //   console.error('Unable to update status: todoCheck is undefined');
  //   return;
  // }
  todoCheck.classList.toggle('checked');
  const input = todoCheck.nextElementSibling;
  if (todoCheck.classList.contains('checked')) {
    sortedArr[i].completed = true;
    input.classList.add('completed-task');
    input.classList.remove('incompleted-task');
  } else {
    sortedArr[i].completed = false;
    input.classList.remove('completed-task');
    input.classList.add('incompleted-task');
  }
  saveData(sortedArr);
};

export default updateStatus;