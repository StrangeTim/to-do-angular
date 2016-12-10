import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div class="editBlock" *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <p>Description: <input [(ngModel)]="childSelectedTask.description"></p>
      <p>Task ID: <input [(ngModel)]="childSelectedTask.id"></p>
      <button (click)="doneClicked()">Done Editing</button>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneEditClicked = new EventEmitter();
  doneClicked() {
    this.doneEditClicked.emit();
  }
}
