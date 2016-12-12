import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
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
  <select (change)="onSortChange($event.target.value)">
    <option value="all" selected="selected">Show All Tasks</option>
    <option value="isDone">Show Done Tasks</option>
    <option value="notDone">Show Incomplete Tasks</option>
  </select>
  <div class="taskDisplay" *ngFor="let currentTask of childTaskList | sorting:selectedSort">
    <h3>{{ currentTask.description }}</h3>
    <button (click)="editClicked(currentTask)">Edit</button>
  </div>
  `
})


//THIS IS THE COMPONENT CLASS DECLARATION
export class TasksListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  public selectedSort: string ="all";
  onSortChange(optionFromMenu) {
    this.selectedSort = optionFromMenu;
  }
  
  editClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

}
