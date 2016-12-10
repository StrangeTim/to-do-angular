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
var EditTaskComponent = (function () {
    function EditTaskComponent() {
        this.doneEditClicked = new core_1.EventEmitter();
    }
    EditTaskComponent.prototype.doneClicked = function () {
        this.doneEditClicked.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_model_1.Task)
    ], EditTaskComponent.prototype, "childSelectedTask", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditTaskComponent.prototype, "doneEditClicked", void 0);
    EditTaskComponent = __decorate([
        core_1.Component({
            selector: 'edit-task',
            template: "\n    <div class=\"editBlock\" *ngIf=\"childSelectedTask\">\n      <h1>Edit Task</h1>\n      <p>Description: <input [(ngModel)]=\"childSelectedTask.description\"></p>\n      <p>Task ID: <input [(ngModel)]=\"childSelectedTask.id\"></p>\n      <button (click)=\"doneClicked()\">Done Editing</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditTaskComponent);
    return EditTaskComponent;
}());
exports.EditTaskComponent = EditTaskComponent;
//# sourceMappingURL=edit-task.component.js.map