import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { AppComponent }       from './app.component';
import { TasksListComponent } from './tasks-list.component';
import { EditTaskComponent }  from './edit-task.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TasksListComponent, EditTaskComponent],
  bootstrap:    [AppComponent]
})

export class AppModule { }
