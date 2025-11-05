import { Task } from './../../Task';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tas-k-item',
  imports: [FontAwesomeModule],
  templateUrl: './tas-k-item.html',
  styleUrl: './tas-k-item.css'
})
export class TasKItem {
  faTimes = faTimes;
 

  task = input<Task | undefined>(undefined); 
  
  
  onDeleteTask = output<Task>();
  onToggleReminder = output<Task>();

onDelete(task: Task | undefined) { 
  if (task) { 
    this.onDeleteTask.emit(task);
  }
}}