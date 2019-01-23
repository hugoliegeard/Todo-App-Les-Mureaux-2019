import { Component } from '@angular/core';
import {Task} from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [
    {
      id: 1,
      title: 'Faire la vaisselle',
      status: false
    },
    {
      id: 2,
      title: 'Sortir les Poubelles',
      status: true
    },
    {
      id: 3,
      title: 'Aller au Ciné avec ma femme',
      status: true
    },
    {
      id: 4,
      title: 'Sortir le chien',
      status: false
    },
    {
      id: 5,
      title: 'Faire le ménage',
      status: false
    },
  ];

}
