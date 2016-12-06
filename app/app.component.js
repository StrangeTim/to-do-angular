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
// THIS IS THE COMPONENT ANNOTATION SECTION
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = [
            new Task("Create To-Do List App.", 0),
            new Task("1: Learn Angular", 1),
            new Task("2: Combine Angular with Rails", 2),
            new Task("3: ???", 3),
            new Task("4: PROFIT", 4)
        ];
        this.selectedTask = this.tasks[1];
    }
    AppComponent.prototype.clickEvent = function (clickedTask) {
        //if (clickedTask.done===true) alert("OMG you just CLICKED on a task that is done!");
        //else alert("This task needs to be done. Get to work!");
        this.selectedTask = clickedTask;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1>To-Do List Angular</h1>\n      <!--table>\n        <th>\n          <td>Task Type</td>\n          <td>Task Description</td>\n          <td>Person</td>\n          <td>Priority</td>\n          <td>Due</td>\n        </th>\n        <tr>\n          <td></td>\n        </tr>\n      </table-->\n      <h3 (click)=\"clickEvent(currentTask)\" *ngFor=\"let currentTask of tasks\">{{ currentTask.description }}</h3>\n      <div class=\"editBlock\">\n        <h1>Edit Task</h1>\n        <p>Description: <input [(ngModel)]=\"selectedTask.description\"</input></p>\n        <p>Task ID: <input [(ngModel)]=\"selectedTask.id\"</input></p>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Task = (function () {
    function Task(description, id) {
        this.description = description;
        this.id = id;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=app.component.js.map