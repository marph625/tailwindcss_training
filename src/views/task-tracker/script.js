document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('input[type="text"]');
    const inputButton = document.getElementById('input-button');
    const taskContainer = document.createElement('div');
    const parentDiv = document.getElementById('parent-div');

    const openTasks = [];
    const doneTasks = [];
    
    let taskId = 0;
    
    parentDiv.appendChild(taskContainer);

    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && inputField.value.trim() !== '') {
            addTask(inputField.value.trim());
            inputField.value = '';
        }
    })

    inputButton.addEventListener('click', function (event)  {
        if (inputField.value.trim() !== '') {
            addTask(inputField.value.trim());
            inputField.value = '';
        }
    })

    function addTask(taskText) {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-item', 'mt-2', 'flex', 'items-center');
        
        const newCheckbox = document.createElement('input');
        newCheckbox.type = "checkbox";
        newCheckbox.id = "task" + taskId++;
        newCheckbox.classList.add('mt-2', 'border-2', 'border-black');
        
        const taskLabel = document.createElement('label');
        taskLabel.classList.add('mx-2');
        taskLabel.textContent = "Task " + (taskId) + ": " + taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('fa-solid', 'fa-trash', 'mx-2');

        const sepLine = document.createElement('hr');
        sepLine.classList.add('border-1', 'border-gray-400', 'mt-2');

        taskWrapper.appendChild(newCheckbox);
        taskWrapper.appendChild(taskLabel);
        taskWrapper.appendChild(deleteButton);
        taskContainer.appendChild(taskWrapper);
        taskContainer.appendChild(sepLine);

        newCheckbox.addEventListener('click', () => {
            taskLabel.classList.toggle('line-through');
            // TODO: Move all new tasks into an array. Move done tasks into another array. Display the tasks depending in which array they are.
            doneTasks.push(newCheckbox);
            console.log(doneTasks);
        });

        deleteButton.addEventListener('click', () => {
            taskWrapper.remove();
            sepLine.remove();
            taskId--;
        });
    }
});