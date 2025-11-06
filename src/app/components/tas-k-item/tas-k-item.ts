import { Task } from './../../Task';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tas-k-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tas-k-item.html',
  styleUrl: './tas-k-item.css'
})
export class TasKItem {
  faTimes = faTimes;
 

  task = input<Task | undefined>(undefined); 
  
  
  onDeleteTask = output<Task>();
  onToggleReminder = output<Task>(); 


  constructor() {}
  ngOnInit(): void {}


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}