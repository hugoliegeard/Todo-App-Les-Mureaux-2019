import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';
import * as _ from 'lodash';

@Pipe({
  name: 'tasksFilter',
  pure: false
})
export class TasksFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {
    // return tasks.filter(task => task.status === status);
    return _.filter(tasks, {'status': status});
  }

}
