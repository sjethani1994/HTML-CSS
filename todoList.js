// Get references to HTML elements
const addTaskButton = document.getElementById("addTask");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

// Set event handler for the "Add" button
addTaskButton.setAttribute("onclick", "todoList()");

// Initialize variables to track task counts
let totalTaskAdded = 0;
let totalTaskCompleted = 0; // Declare totalTaskCompleted as a global variable

// Function to add a new task
function todoList() {
  // Get the task text from the input field
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");

    // Create a label for the task text
    const label = document.createElement("label");
    label.textContent = taskText;

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Set input type to checkbox
    checkbox.classList.add("mr-2"); // Add margin to the right for spacing
    checkbox.setAttribute("onclick", "updateTotalTaskCompleted(this)");

    // Create a button for deleting the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add a unique ID to the delete button based on taskText
    const deleteButtonId = "delete_" + taskText;
    deleteButton.setAttribute("id", deleteButtonId);
    deleteButton.setAttribute("class", "btn btn-primary btn-sm ml-2");
    deleteButton.setAttribute("onclick", `deleteTask("${taskText}")`);

    // Append label, checkbox, and deleteButton to listItem
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    // Append listItem to the taskList
    taskList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";

    // Update the totalTasks element
    totalTaskAdded += 1;
    updateTotalTasks();
  }
}

// Function to delete a task
function deleteTask(taskText) {
  // Get the task list and all list items
  const taskList = document.getElementById("taskList");
  const tasks = taskList.getElementsByTagName("li");

  for (let i = 0; i < tasks.length; i++) {
    const listItemLabel = tasks[i].getElementsByTagName("label")[0];

    if (listItemLabel && listItemLabel.textContent === taskText) {
      // Remove the task from the list
      tasks[i].remove();
      break;
    }
  }

  // If tasks remain, decrement totalTaskAdded and update the display
  if (totalTaskAdded >= 1) {
    totalTaskAdded -= 1;
    updateTotalTasks();
  }

  // Update the completed task count
  updateTotalTaskCompleted();
}

// Function to update the total task count
function updateTotalTasks() {
  const totalTasksElement = document.getElementById("totalTasks");
  totalTasksElement.textContent = totalTaskAdded;
}

// Function to update the completed task count
function updateTotalTaskCompleted(checkbox) {
  const totalTasksCompletedElement = document.getElementById(
    "totalTasksCompleted"
  );
  const taskList = document.getElementById("taskList");
  const tasks = taskList.getElementsByTagName("li");
  let completedTasks = 0;

  for (let i = 0; i < tasks.length; i++) {
    const listItemInputs = tasks[i].getElementsByTagName("input");
    for (let j = 0; j < listItemInputs.length; j++) {
      if (listItemInputs[j].type === "checkbox" && listItemInputs[j].checked) {
        completedTasks += 1;
      }
    }
  }

  // Update the displayed completed task count
  totalTasksCompletedElement.textContent = completedTasks;
}
