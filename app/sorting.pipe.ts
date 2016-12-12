import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name:"sorting",
  pure: false
})

export class SortingPipe implements PipeTransform {
  transform(input: Task[], desiredSort) {
    var output: Task[] = [];
    if ( desiredSort==="notDone") {
      for ( var i=0; i<input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
    } else if (desiredSort === "isDone") {
      for (var i=0;i<input.length;i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
  }
}
