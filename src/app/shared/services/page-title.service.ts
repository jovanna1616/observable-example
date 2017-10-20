import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';



@Injectable()

export class PageTitleService {
	// u servisu samo definisemo sta ce nam trebati
	private pageTitleSource = new Subject<string>(); // Subject klasa - u isto vreme moze i da slusa i da salje
	 // a sam servis se kreira za komunikaciju komponenti koje nisu u diretnim vezama
	

	//kanal otvoren sa jedne strane : slusa se preko asObservable().Ovo ase dodeljuje onome ko zeli da slusa
	pageTitleAnounced$ = this.pageTitleSource.asObservable(); 

	// ovu f-ju koristi onaj koji pusta
	setTitle(title: string) {

		this.pageTitleSource.next(title);

	}
}