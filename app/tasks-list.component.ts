import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  template:`
  <h1>To-Do List Angular</h1>
  <!--table>
    <th>
      <td>Task Type</td>
      <td>Task Description</td>
      <td>Person</td>
      <td>Priority</td>
      <td>Due</td>
    </th>
    <tr>
      <td></td>
    </tr>
  </table-->
  <div class="taskDisplay" *ngFor="let currentTask of tasks">
    <h3>{{ currentTask.description }}</h3>
    <button (click)="showDetails(currentTask)">Edit</button>
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
export class TasksListComponent {
  public tasks: Task[] = [
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

export class Task {
  public done: boolean = false;
  constructor (public description: string, public id: number) {

  }
}
