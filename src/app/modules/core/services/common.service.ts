import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private countryList = [];
  public filteredData = new Subject();

  constructor(private readonly api: ApiService) { }

  /**
   * @description Function for fetching the user details
   */
  public getUserDetails(): void {
    return localStorage.getItem('userDetails') ?
      JSON.parse(localStorage.getItem('userDetails')) : { username: null, password: null };
  }
  /**
   * @description Function to get country list
   */
  public getCountryList(): any[] {
    return this.countryList;
  }
  /**
   *
   * @description Get country dertails by id
   */
  public getCountryListById(id): any {
    return this.countryList.find(data => data.countryInfo._id === +id);
  }
  /**
   * @description Function for set country list by data
   */
  public setCountryList(data): void {
    this.countryList = data;
  }
  /**
   * @description Function for update country list by data and id
   */
  public updateCountryList(id, data): void {
    this.countryList.forEach(item => {
      if (item.countryInfo._id === id){
        item = data;
      }
    });
  }
}

