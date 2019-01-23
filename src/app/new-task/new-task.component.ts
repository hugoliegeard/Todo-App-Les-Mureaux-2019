import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../shared/models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  /**
   * La tâche à créer.
   */
  task: Task = new Task();

  /**
   * Permet d'emettre un évènement lors
   * de la création d'une tâche !
   */
  @Output() newTaskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  /**
   * Fonction appelée lors de la
   * création d'une tâche. (submit)
   */
  submitTask() {
    this.newTaskEvent.emit(this.task);
    this.task = new Task();
  }
}
