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
      <edit-task
        [childSelectedTask]="selectedTask"
        (doneEditClicked)="doneEdit()"
        >
      </edit-task>
      <new-task
        (newTaskSender)="addTask($event)"
      ></new-task>
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
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
