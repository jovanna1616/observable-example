import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], fields: string[], value: string) {
    return items.filter(function (item) {
      let source = '';
      let needle = value.trim().toLocaleLowerCase();

      fields.forEach(function (field) {
        source += item[field].toLowerCase() + ' ';
      });

      return source.indexOf(needle) !== -1;
    });
  }
}
