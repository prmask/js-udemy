// const task1 = document.getElementById("task-1");
// task1.style.color = 'white';
// task1.style.backgroundColor = '#000';

const task1 = document.querySelector('#task-1');
task1.style.color = 'white';
task1.style.backgroundColor = '#000';

// document.head.innerText = "Assignment - Solved!";

const title1 = document.head;
const docTitle = title1.querySelector('title');

docTitle.textContent = "title changed";
