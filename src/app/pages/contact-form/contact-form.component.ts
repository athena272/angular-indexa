import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SeparatorComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup

  constructor() { }

  ngOnInit() {
    this.startForm()
  }

  startForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl(''),
      socialNetworks: new FormControl(''),
      observations: new FormControl('')
    })
  }

  saveNewContact() {
    if (this.contactForm.valid) {
      console.log("🚀 ~ ContactFormComponent ~ saveNewContact ~ this.contactForm.value:", this.contactForm.value)
    }
  }

  cancelSubmit() {
    console.log('Cancelling the form submission')
  }
}
