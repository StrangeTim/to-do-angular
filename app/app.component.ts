import { Component } from '@angular/core';
import { Task } from './task.model';

// THIS IS THE COMPONENT ANNOTATION SECTION
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <task-list
        [childTaskList]="masterTaskList"
        (clickSender)="showDetails($event)"
        > <!-- childTaskList is the input to the tasks list component -->
          <!-- clickSender is the expected OUTPUT from the child component -->
      </task-list>
    </div>
    <div class="editBlock" *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <p>Description: <input [(ngModel)]="selectedTask.description"></p>
      <p>Task ID: <input [(ngModel)]="selectedTask.id"></p>
      <button (click)="doneEdit()">Done Editing</button>
    </div>
  `
})


//THIS IS THE COMPONENT CLASS DECLARATION
export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do List App.", 0),
    new Task("1: Learn Angular", 1),
    new Task("2: Combine Angular with Rails", 2),
    new Task("3: ???", 3),
    new Task("4: PROFIT", 4)
  ];
  selectedTask: Task = null;
  showDetails( clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  doneEdit() {
    this.selectedTask = null;
  }
}
