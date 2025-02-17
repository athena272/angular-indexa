import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../../components/contact/contact.component';
import { Contact } from '../../types/Contact';
import { ContactService } from '../../services/contact.service';

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
export class ContactListComponent implements OnInit {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = []
  filterByText: string = ''

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts()
  }

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
