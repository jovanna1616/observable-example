import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: '[contactRow]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {

	private contact: Contact;

	@Input() set contactRow(contactFromInput: Contact) {
		this.contact = contactFromInput;
	}

	@Output() onEdit = new EventEmitter<Contact>();
	@Output() onRemove = new EventEmitter<Contact>();


	edit(contact: Contact) {

		this.onEdit.emit(contact);

	}

	remove(contact: Contact) {

		this.onRemove.emit(contact);

	}

  constructor() { }

  ngOnInit() {
  }

}
