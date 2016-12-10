import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h3>Add a New Task</h3>
    <div class="newTaskForm">
      <input #newDescription placeholder="Enter Task Description:">
      <input #newID placeholder="Enter New Task ID:">
      <button (click)="
        addClicked(newDescription.value, newID.value);
        newDescription.value='';
        newID.value='';
      ">Add Task</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description:string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
