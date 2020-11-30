import { Pipe, PipeTransform } from '@angular/core';
import { CountryListing } from '../interfaces/country-listing.interface';
import { CommonService } from '../../core/services/common.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private readonly commonService: CommonService) { }
  transform(value: CountryListing[], searchText: string): CountryListing[] {
    if (!value || !searchText) {
      this.commonService.filteredData.next(value.length);
      return value;
    }
    const filteredItem = value.filter(({ country }) => country.toLowerCase().startsWith(searchText.toLowerCase()));
    this.commonService.filteredData.next(filteredItem.length);
    return filteredItem;
  }

}
