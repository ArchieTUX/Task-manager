document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskTitleInput = document.getElementById('taskTitle');
  const taskDescriptionInput = document.getElementById('taskDescription');
  const taskDeadlineInput = document.getElementById('taskDeadline');
  const taskPriorityInput = document.getElementById('taskPriority');

  // Task categories
  const toDoTasksContainer = document.getElementById('toDoTasks');
  const inProgressTasksContainer = document.getElementById('inProgressTasks');
  const doneTasksContainer = document.getElementById('doneTasks');

  // Function to create a task card
  function createTaskCard(title, description, deadline, priority, category) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // Title
    const taskTitle = document.createElement('h3');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = title;

    // Description
    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = description;

    // Deadline
    const taskDeadline = document.createElement('p');
    taskDeadline.classList.add('task-deadline');
    taskDeadline.textContent = `Deadline: ${deadline}`;

    // Priority
    const taskPriority = document.createElement('p');
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = `Priority: ${priority}`;

    // Action buttons
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // In Progress Button
    const inProgressBtn = document.createElement('button');
    inProgressBtn.textContent = 'Move to In Progress';
    inProgressBtn.addEventListener('click', () => {
      moveTaskToCategory(taskCard, 'In Progress');
    });

    // Done Button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Move to Done';
    doneBtn.addEventListener('click', () => {
      moveTaskToCategory(taskCard, 'Done');
    });

    taskActions.append(inProgressBtn, doneBtn);
    taskCard.append(taskTitle, taskDescription, taskDeadline, taskPriority, taskActions);

    // Add the task to the correct category container
    if (category === 'To Do') {
      toDoTasksContainer.appendChild(taskCard);
    } else if (category === 'In Progress') {
      inProgressTasksContainer.appendChild(taskCard);
    } else if (category === 'Done') {
      doneTasksContainer.appendChild(taskCard);
    }
  }

  // Move Task to a different category
  function moveTaskToCategory(taskCard, category) {
    if (category === 'In Progress') {
      inProgressTasksContainer.appendChild(taskCard);
    } else if (category === 'Done') {
      doneTasksContainer.appendChild(taskCard);
    }
  }

  // Handle Add Task Button Click
  addTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const deadline = taskDeadlineInput.value;
    const priority = taskPriorityInput.value;

    if (title && description && deadline && priority) {
      createTaskCard(title, description, deadline, priority, 'To Do');
      // Clear inputs after task is added
      taskTitleInput.value = '';
      taskDescriptionInput.value = '';
      taskDeadlineInput.value = '';
      taskPriorityInput.value = 'low';
    } else {
      alert('Please fill in all fields');
    }
  });
});
