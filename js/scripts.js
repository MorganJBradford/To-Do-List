// Business Logic for ToDoList
function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}
let toDoList = new ToDoList()

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}


// Business Logic for Task

function Task(task, progress) {
  this.task = task;
  this.progress = progress;
}
