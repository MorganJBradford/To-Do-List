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

ToDoList.prototype.assignId = function() {
  this.currentId += 1
  return this.currentId;
}

ToDoList.prototype.findTask = function (id) {
  if  (this.tasks[id] != undefined) {
    return this.tasks[id];
  }
  return false;
}
ToDoList.prototype.removeTask = function(id)  {
  if  (this.tasks[id] === undefined)  {
    return false;
  }
  delete this.tasks[id];
  return true;
}
// Business Logic for Task

function Task(task, progress) {
  this.task = task;
  this.progress = progress;
}
