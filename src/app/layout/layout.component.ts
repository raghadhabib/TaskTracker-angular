import { Component, signal } from '@angular/core';
import { RouterOutlet } from    '@angular/router';
import { Header } from   "./header/header";
import { Tasks } from "../pages/tasks-page/tasks-page";

@Component({
selector: 'app-layout',
standalone: true,
imports: [RouterOutlet, Header, Tasks], // Remove TasksPage from here
templateUrl: './layout.component.html',
styleUrls: []
})
export class LayoutComponent {
// State for components within the layout (Header is one)
showAddTask = signal<boolean>(false);

toggleAddTask() {
this.showAddTask.update(value => !value);
}
}