document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        
        if (taskText !== '' && dueDate !== '') {
            const listItem = document.createElement('li');
            

            var x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            
            const taskTextElement = document.createElement('span');
            taskTextElement.className = 'task-text';
            taskTextElement.textContent = taskText;
            
            const dueDateElement = document.createElement('span');
            dueDateElement.className = 'due-date';
            dueDateElement.textContent = `Due: ${dueDate}`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });
            listItem.appendChild(x);
            listItem.appendChild(taskTextElement);
            listItem.appendChild(dueDateElement);
            listItem.appendChild(deleteBtn);
            todoList.appendChild(listItem);
            
            taskInput.value = '';
            dueDateInput.value = '';
        }
    });
});
