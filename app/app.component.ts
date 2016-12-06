import { Component } from '@angular/core';

// THIS IS THE COMPONENT ANNOTATION SECTION
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
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
      <h3 *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
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

}

export class Task {
  public done: boolean = false;
  constructor (public description: string, public id: number) {

  }
}
