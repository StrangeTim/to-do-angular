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
var task_model_1 = require('./task.model');
// THIS IS THE COMPONENT ANNOTATION SECTION
var AppComponent = (function () {
    function AppComponent() {
        this.masterTaskList = [
            new task_model_1.Task("Create To-Do List App.", 0),
            new task_model_1.Task("1: Learn Angular", 1),
            new task_model_1.Task("2: Combine Angular with Rails", 2),
            new task_model_1.Task("3: ???", 3),
            new task_model_1.Task("4: PROFIT", 4)
        ];
        this.selectedTask = null;
    }
    AppComponent.prototype.showDetails = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    AppComponent.prototype.doneEdit = function () {
        this.selectedTask = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <task-list\n        [childTaskList]=\"masterTaskList\"\n        (clickSender)=\"showDetails($event)\"\n        > <!-- childTaskList is the input to the tasks list component -->\n          <!-- clickSender is the expected OUTPUT from the child component -->\n      </task-list>\n      <edit-task\n        [childSelectedTask]=\"selectedTask\"\n        (doneEditClicked)=\"doneEdit()\"\n        >\n      </edit-task>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map