import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

	@Output()
	onSubmit = new EventEmitter<Contact>();

	private newContact: Contact = new Contact();


	submitContact(contact: Contact) {
		this.onSubmit.emit(contact);
		this.newContact = new Contact();

		// this.newContact = new Contact();// anuliranje inputa forme
		// this.contactService.addContact
		// 	(
		// 	contact.firstName,
		// 	contact.lastName,
		// 	contact.email
		// 	).subscribe
		// 	(
		// 	contact => {
		// 		this.contacts.push(contact);
		// 	}
		// 	);
	}

	edit(contact: Contact) {
		// newContact sluzi za popunjavanje forme sa podacima koji ce se editovati
		this.newContact = Object.assign({}, contact); // kloniranje postojeceg objekta
	}

  constructor() { }

  ngOnInit() {
  }

}
