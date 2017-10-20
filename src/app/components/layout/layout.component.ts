import { Component } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {

	private title: string;

  constructor(private pageTitleService: PageTitleService) {

		pageTitleService.pageTitleAnounced$.subscribe(title => {  // pageTitleService.pageTitleAnounced$ znaci da slusa
			this.title = title;
		});
 	}

}
