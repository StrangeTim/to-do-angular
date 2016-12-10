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
        this.clickSender = new core_1.EventEmitter();
    }
    TasksListComponent.prototype.editClicked = function (taskToEdit) {
        this.clickSender.emit(taskToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TasksListComponent.prototype, "childTaskList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TasksListComponent.prototype, "clickSender", void 0);
    TasksListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "\n  <h1>To-Do List Angular</h1>\n  <!--table>\n    <th>\n      <td>Task Type</td>\n      <td>Task Description</td>\n      <td>Person</td>\n      <td>Priority</td>\n      <td>Due</td>\n    </th>\n    <tr>\n      <td></td>\n    </tr>\n  </table-->\n  <div class=\"taskDisplay\" *ngFor=\"let currentTask of childTaskList\">\n    <h3>{{ currentTask.description }}</h3>\n    <button (click)=\"editClicked(currentTask)\">Edit</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasks-list.component.js.map