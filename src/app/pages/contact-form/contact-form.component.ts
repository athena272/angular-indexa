import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SeparatorComponent, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      telephone: new FormControl(''),
      email: new FormControl(''),
      birthDate: new FormControl(''),
      socialNetworks: new FormControl(''),
      observations: new FormControl('')
    })
  }
}
