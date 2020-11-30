import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from '../constants/url-constants';
import { CovidCases } from '../interfaces/covid-cases.interface';
import { CountryListing } from '../interfaces/country-listing.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  /**
   * API Call for getting covid cases
   */
  public getCovidCases(): Observable<CovidCases> {
    return this.http.get<CovidCases>(UrlConstants.covidCasesURL);
  }

  /**
   * API Call for getting countries
   */
  public getCountries(): Observable<CountryListing[]> {
    return this.http.get<CountryListing[]>(UrlConstants.countriesURL);
  }
}

