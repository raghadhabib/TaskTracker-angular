import { Component } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../Task';
import { TasKItem } from "../tas-k-item/tas-k-item";
import { AddTask } from "../add-task/add-task";

@Component({
  selector: 'app-tasks',
  imports: [TasKItem, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  tasks :Task[] = TASKS;

}
