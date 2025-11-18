import { Component,input } from '@angular/core';
import { TaskService } from "../../core/services/task-service";
import {Task} from '../../core/models/Task';
import { TasKItem } from "../../shared/tas-k-item/tas-k-item";
import { AddTask } from "../../shared/add-task/add-task";

@Component({
  selector: 'app-tasks',
  imports: [TasKItem, AddTask],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css'
})
export class Tasks {
  showAddTask = input.required<boolean>();

  tasks :Task[] = [];

    constructor(private taskService: TaskService) {}
    ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
}

addTask(task: Task) {
      this.taskService.addTask(task).subscribe((newTask) => {
        this.tasks.push(newTask);
      });
    }

    deleteTask(task: Task) {
      this.taskService
        .deleteTask(task)
        .subscribe(
          () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        );

    }
    toggleReminder(task: Task) {
      task.reminder = !task.reminder;
      this.taskService
        .updateTaskReminder(task)
        .subscribe();
    }}
