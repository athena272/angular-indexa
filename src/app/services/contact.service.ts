import { Injectable } from '@angular/core';
import { Contact } from '../types/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [{ "id": 1, "name": "Ana", "telephone": "29 278869420" }, { "id": 2, "name": "Antônio", "telephone": "38 128451235" }, { "id": 2, "name": "Ágata", "telephone": "38 128451235" }, { "id": 3, "name": "Bruno", "telephone": "95 695521583" }, { "id": 4, "name": "Beatriz", "telephone": "25 854986459" }, { "id": 5, "name": "Carlos", "telephone": "94 543197849" }, { "id": 6, "name": "Cláudia", "telephone": "31 176437098" }, { "id": 7, "name": "Daniel", "telephone": "56 613692441" }, { "id": 8, "name": "Diana", "telephone": "16 670764734" }, { "id": 9, "name": "Eduardo", "telephone": "71 962784210" }, { "id": 10, "name": "Eliana", "telephone": "94 601212586" }, { "id": 11, "name": "Fabio", "telephone": "21 613882845" }, { "id": 12, "name": "Fernanda", "telephone": "36 286892946" }, { "id": 13, "name": "Gabriel", "telephone": "23 876578152" }, { "id": 14, "name": "Giovana", "telephone": "82 836752948" }, { "id": 15, "name": "Henrique", "telephone": "16 326607223" }, { "id": 16, "name": "Helena", "telephone": "58 696978253" }, { "id": 17, "name": "Igor", "telephone": "46 316441802" }, { "id": 18, "name": "Isabela", "telephone": "81 103125769" }, { "id": 19, "name": "João", "telephone": "76 316563452" }, { "id": 20, "name": "Juliana", "telephone": "86 121042222" }, { "id": 21, "name": "Kleber", "telephone": "16 333519686" }, { "id": 22, "name": "Karina", "telephone": "74 580566400" }, { "id": 23, "name": "Lucas", "telephone": "89 371256434" }, { "id": 24, "name": "Lúcia", "telephone": "65 716464295" }, { "id": 25, "name": "Marcelo", "telephone": "45 973219600" }, { "id": 26, "name": "Mariana", "telephone": "59 324639597" }, { "id": 27, "name": "Nelson", "telephone": "66 918277590" }, { "id": 28, "name": "Natália", "telephone": "71 100450583" }, { "id": 29, "name": "Otávio", "telephone": "77 329849513" }, { "id": 30, "name": "Olívia", "telephone": "46 588271840" }, { "id": 31, "name": "Paulo", "telephone": "88 337812653" }, { "id": 32, "name": "Patrícia", "telephone": "82 634070502" }, { "id": 33, "name": "Quirino", "telephone": "34 377667996" }, { "id": 34, "name": "Queila", "telephone": "58 710806340" }, { "id": 35, "name": "Rafael", "telephone": "52 794950878" }, { "id": 36, "name": "Renata", "telephone": "48 881351523" }, { "id": 37, "name": "Sérgio", "telephone": "36 725382335" }, { "id": 38, "name": "Sandra", "telephone": "46 945695132" }, { "id": 39, "name": "Thiago", "telephone": "79 860343483" }, { "id": 40, "name": "Tatiana", "telephone": "92 391918653" }, { "id": 41, "name": "Ubiratan", "telephone": "22 111691083" }, { "id": 42, "name": "Úrsula", "telephone": "92 702488980" }, { "id": 43, "name": "Vitor", "telephone": "40 769490767" }, { "id": 44, "name": "Vanessa", "telephone": "37 290073018" }, { "id": 45, "name": "Wagner", "telephone": "29 707593374" }, { "id": 46, "name": "Wanessa", "telephone": "34 726018755" }, { "id": 47, "name": "Xavier", "telephone": "95 778422977" }, { "id": 48, "name": "Xênia", "telephone": "96 248413886" }, { "id": 49, "name": "Yuri", "telephone": "65 419637955" }, { "id": 50, "name": "Yasmin", "telephone": "69 433926906" }, { "id": 51, "name": "Zacarias", "telephone": "23 296915638" }, { "id": 52, "name": "Zuleica", "telephone": "30 674550130" }];

  constructor() {
    // Try to get data from local storage
    const contactsLocalStorageString = localStorage.getItem('contacts');
    const contactsLocalStorage = contactsLocalStorageString ? JSON.parse(contactsLocalStorageString) : null;

    // Use existing contacts as default if localStorage is empty
    this.contacts = contactsLocalStorage || this.contacts;

    // Save contacts to local storage if not already saved
    if (!contactsLocalStorage) {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  }

  getContacts() {
    return this.contacts
  }

  saveNewContact(contact: Contact) {
    this.contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
}
