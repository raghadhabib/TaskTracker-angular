import { Component } from '@angular/core';
import { RouterOutlet } from  '@angular/router';
import { LayoutComponent } from  "./layout/layout.component";
// Import the new Layout

// Remove old imports: Header, Tasks, FormsModule, FontAwesomeModule, HttpClientModule

@Component({
selector: 'app-root',
standalone: true,
// Only import the main layout component and RouterOutlet
imports: [RouterOutlet, LayoutComponent],
// Change the template URL to use the new layout
template: '&lt;app-layout&gt;&lt;/app-layout&gt;',
styleUrl: './app.css' // Keep app.css for root/global styles if needed
})
export class App {
// Remove the signal and toggle method as they are now in LayoutComponent
}