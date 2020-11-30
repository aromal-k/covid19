import { Pipe, PipeTransform } from '@angular/core';
import { CountryListing } from '../interfaces/country-listing.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: CountryListing[], sortBy: string): CountryListing[] {
    if (!value || !sortBy) {
      return value;
    }
    if (sortBy === 'country') {
      return value.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }
    return value.sort((a, b) => a[sortBy] - b[sortBy]);
  }

}
