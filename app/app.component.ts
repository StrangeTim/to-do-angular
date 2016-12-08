import { Component } from '@angular/core';

// THIS IS THE COMPONENT ANNOTATION SECTION
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <tasks></tasks>
    </div>
  `
})


//THIS IS THE COMPONENT CLASS DECLARATION
export class AppComponent {
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
