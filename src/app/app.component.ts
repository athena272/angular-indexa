import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import agenda from './agenda.json'

interface Contact {
  id: number
  name: string
  telephone: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda
  filterByText: string = ''

  // Remove accents from a string
  private removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByText(): Contact[] {
    if (!this.filterByText) return this.contacts

    return this.contacts.filter(contact => this.removeAccents(contact.name).toLowerCase().includes(this.filterByText.toLowerCase()))
  }

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => this.removeAccents(contact.name).toLowerCase().startsWith(letter))
  }

  // filterContactsByInitialLetter(letter: string): Contact[] {
  //   return this.contacts.filter(contact => contact.name.toLowerCase().startsWith(letter))
  // }
}
