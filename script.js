const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('task-list');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;
    const taskPriority = priorityInput.value;
    if (taskText !== '') {
        addTask(taskText, taskDate, taskTime, taskPriority);
        taskInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        priorityInput.value = 'medium';
    }
});

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});

function addTask(taskText, taskDate, taskTime, taskPriority) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const taskDateTimeElement = document.createElement('span');
    taskDateTimeElement.textContent = `${taskDate} at ${taskTime}`;

    const taskPriorityElement = document.createElement('span');
    taskPriorityElement.textContent = `Priority: ${taskPriority}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskDateTimeElement);
    taskItem.appendChild(taskPriorityElement);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}