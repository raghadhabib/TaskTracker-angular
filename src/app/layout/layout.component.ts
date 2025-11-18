import { Component, signal } from '@angular/core';
import { RouterOutlet } from    '@angular/router';
import { Header } from   "./header/header";

@Component({
selector: 'app-layout',
standalone: true,
imports: [RouterOutlet, Header], // Remove TasksPage from here
templateUrl: './layout.component.html',
styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
// State for components within the layout (Header is one)
showAddTask = signal<boolean>(false);

toggleAddTask() {
this.showAddTask.update(value => !value);
}
}