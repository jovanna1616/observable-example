import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  public getContacts()
  {
  	return this.http.get<any[]>('http://localhost:8000/contacts.php');
  }

  public addContact(contact)
  {
	  return this.http.post(
		  'http://localhost:8000/contacts-add.php',
		  {
	  		id: contact.id,
			  firstName: contact.firstName,
			  lastName: contact.lastName,
			  email: contact.email
		  }
	  	);
  }

  public editContact(contact) {
	  return this.http.put('http://localhost:8000/contact-edit.php', 
		  {
			  id: contact.id,
			  firstName: contact.firstName,
			  lastName: contact.lastName,
			  email: contact.email
		  }
	  	);
  }

  public removeContact(contact: Contact) {
		return new Observable((o: Observer<any>) => {
			setTimeout(() => {
				o.next(contact); // next - propusta dalje contact onome ko se subscribe na contact
			}, 2000);
		});

  }

}
