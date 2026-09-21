const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskContainer = document.querySelector(".task-container");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("Add a task")
    return
  } 

  const newTask = document.createElement("p");
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.innerText = "Delete"

  newTask.textContent = taskInput.value
  taskContainer.appendChild(newTask)
  taskContainer.appendChild(deleteTaskBtn)

  deleteTaskBtn.addEventListener("click", () => {
    newTask.remove();
    deleteTaskBtn.remove()
  })
})

