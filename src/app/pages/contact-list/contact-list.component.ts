import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../../components/contact/contact.component';
import { CommonModule } from '@angular/common';
import agenda from './agenda.json'
import { RouterLink } from '@angular/router';

interface Contact {
  id: number
  name: string
  telephone: string
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
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
