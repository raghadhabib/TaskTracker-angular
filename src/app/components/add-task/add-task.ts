import { Component, output } from '@angular/core'; // Import 'output'
import { FormsModule } from '@angular/forms'; // <-- ADD THIS
import { Task } from '../../Task'; // Import Task interface

@Component({
  selector: 'app-add-task',
  imports: [FormsModule], 
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
    text: string = "";
    day: string = "";
    reminder: boolean = false;
    onAddTask = output<Task>();

    onSubmit(){
        if(!this.text || !this.day){
          alert ("Please add a task text and day/time.")
          return; 
        }
        const newTask = {
            text: this.text,
            day: this.day,
            reminder: this.reminder
        }
        
        this.onAddTask.emit(newTask);
        this.text = "";
        this.day = "";
        this.reminder = false;
    }
}