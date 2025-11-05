import { Component } from '@angular/core';
import { Button } from "../button/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [Button, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  title :string = "Task Tracker";
  faPlus = faPlus;

  toggoleAddTask(){
    console.log("Toggle");
  }
}
