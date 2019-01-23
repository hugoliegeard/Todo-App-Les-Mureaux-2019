import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  getTasks() {
    // -- Récupération des Tâches depuis le localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks !== null ? tasks : [];
  }
  save(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
