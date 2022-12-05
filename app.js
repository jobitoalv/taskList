const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('clear.task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
}
// Add Task 
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

const li = document.createElement('li');

li.className = 'collection-item';
//create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append the link to li
li.appendChild(link);
console.log(li)
//Append li to ul
// taskList.appendChild(li);
// Clear input
// taskInput.value = '';

    e.preventDefault();
}