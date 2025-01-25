import { Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  }
];
