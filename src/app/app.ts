import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
