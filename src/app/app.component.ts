import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // RouterOutlet,
    ContactListComponent,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
