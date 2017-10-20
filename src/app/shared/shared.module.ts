import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from './services/contacts.service';
import { PageTitleService } from './services/page-title.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	ContactsService,
    PageTitleService,
  ],
  declarations: [
    FilterPipe
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
