import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
