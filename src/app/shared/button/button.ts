// src/app/components/button/button.ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button { // No need to implement OnInit if it's empty
  // Use input() for properties
  text = input<string>("");
  color = input<string>("");

  // Use output() for events (no need for EventEmitter)
  btnClick = output<void>();

  onClick() {
    // When using output(), you call .emit() directly
    this.btnClick.emit();
  }
}