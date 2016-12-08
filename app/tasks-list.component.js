"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TasksListComponent = (function () {
    function TasksListComponent() {
        this.tasks = [
            new Task("Create To-Do List App.", 0),
            new Task("1: Learn Angular", 1),
            new Task("2: Combine Angular with Rails", 2),
            new Task("3: ???", 3),
            new Task("4: PROFIT", 4)
        ];
        this.selectedTask = null;
    }
    TasksListComponent.prototype.showDetails = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    TasksListComponent.prototype.doneEdit = function () {
        this.selectedTask = null;
    };
    TasksListComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: "\n  <h1>To-Do List Angular</h1>\n  <!--table>\n    <th>\n      <td>Task Type</td>\n      <td>Task Description</td>\n      <td>Person</td>\n      <td>Priority</td>\n      <td>Due</td>\n    </th>\n    <tr>\n      <td></td>\n    </tr>\n  </table-->\n  <div class=\"taskDisplay\" *ngFor=\"let currentTask of tasks\">\n    <h3>{{ currentTask.description }}</h3>\n    <button (click)=\"showDetails(currentTask)\">Edit</button>\n  </div>\n  <div class=\"editBlock\" *ngIf=\"selectedTask\">\n    <h1>Edit Task</h1>\n    <p>Description: <input [(ngModel)]=\"selectedTask.description\"></p>\n    <p>Task ID: <input [(ngModel)]=\"selectedTask.id\"></p>\n    <button (click)=\"doneEdit()\">Done Editing</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
var Task = (function () {
    function Task(description, id) {
        this.description = description;
        this.id = id;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=tasks-list.component.js.map