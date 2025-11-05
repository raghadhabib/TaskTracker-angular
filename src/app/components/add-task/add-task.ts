import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
    text: string = "";
    day: string = "";
    reminder: boolean = false;

    onSubmit(){
        if(!this.text){
          alert ("Please inert ")
        }
    }
}
