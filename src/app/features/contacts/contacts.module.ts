import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxErrorsModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
