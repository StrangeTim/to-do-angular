import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { TasksListComponent } from './tasks-list.component';
import { AppComponent }       from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TasksListComponent],
  bootstrap:    [AppComponent]
})

export class AppModule { }
