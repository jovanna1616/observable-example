import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[] = [];
  private filter: String = '';
  
  constructor(private contactService: ContactsService) {
    contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      // (err:HttpErrorResponse) => {
      //   alert('Something went wrong');
      //   // nisu navodnici vec tik  ecmascript 6 syntax
      //   alert(`Backend returned code ${err.status} with message: ${err.error}`);

      // }
      );

  }
  
  submitContact(contact: Contact) {

    if (contact.id) {
    this.contactService.editContact(contact).subscribe
    (
      (contact: Contact ) => {

        let existingContact = this.contacts.filter(c => c.id === contact.id);

        if (existingContact.length) {

          Object.assign(existingContact[0], contact);
        }
      }
    );

      

    } else {
        this.contactService.addContact
          (contact).subscribe(
            contact => {
              this.contacts.push(contact);
            }
          );
      }
  }


  remove(contact) {
    this.contactService.removeContact(contact)
      .subscribe(
        (contact: Contact) => {
          const index = this.contacts.indexOf(contact);
          this.contacts.splice(index, 1);
        }
      );
  }

}
