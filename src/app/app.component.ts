import { Component } from '@angular/core';
import {Task} from './shared/models/task';
import * as _ from 'lodash';
import {TaskStorageService} from './shared/services/task-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private taskStorage: TaskStorageService) {
    this.tasks = this.taskStorage.getTasks();
  }

  tasks: Task[] = [];

  /**
   * Supprimer une tâche
   * du tableau 'tasks'...
   */
  removeTask(task: Task) {
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.saveTasks();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  saveTasks() {
    this.taskStorage.save(this.tasks);
  }
}
