import { saveData } from './localStorage.js';

const updateStatus = (todoCheck, sortedArr, i) => {
  todoCheck.classList.toggle('checked');
  if (todoCheck.classList.contains('checked')) {
    sortedArr[i].completed = true;
  } else {
    sortedArr[i].completed = false;
  }
  // updated tasks list will be stored in local storage.
  saveData(sortedArr);
};

export default updateStatus;