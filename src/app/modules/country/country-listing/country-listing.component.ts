import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/modules/core/services/common.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit, OnDestroy {
  public countryData = [];
  public countryList = [];
  public showLoader = false;
  public searchText: string;
  private filterDataSubscription: Subscription;
  private countryListSubscription: Subscription;
  public paginationData = {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 30,
    totalLength: 0
  };
  public showSortDropdown = false;
  public sortLabel = 'Sort By';
  public sortBy: string;
  constructor(
    private readonly commonService: CommonService,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCountryList();
    this.filterDataSubscription = this.commonService.filteredData.subscribe(data => {
      setTimeout(() => {
        this.paginationData.totalLength = +data;
        this.paginationData.totalPages = Math.ceil(+data / 30);
        this.paginationData.currentPage = 1;
      });
    });
  }
  /**
   * @description Function for fetching the country listing data from API
   */
  public getCountryList(): void {
    this.countryData = this.commonService.getCountryList();
    if (this.countryData.length === 0) {
      this.showLoader = true;
      this.countryListSubscription = this.apiService.getCountries().pipe(finalize(() => this.showLoader = false)).subscribe(data => {
        this.countryList = data;
        this.paginationData.totalLength = this.countryList.length;
        this.paginationData.totalPages = Math.ceil(this.countryList.length / 30);
        this.commonService.setCountryList(this.countryList);
      });
    } else {
      this.countryList = this.countryData;
      this.paginationData.totalLength = this.countryList.length;
      this.paginationData.totalPages = Math.ceil(this.countryList.length / 30);
      this.commonService.setCountryList(this.countryList);
    }
  }

  /**
   * @description Function for handling the page change
   * @param newPage the page number from the pagination function
   */
  public pageChange(newPage: number): void {
    this.paginationData.currentPage = newPage;
  }
  /**
   * @description Function for navigating to edit screen
   */
  public gotoEditCountry(country): void {
    this.router.navigate(['home/country/country-editing/' + country.countryInfo._id]);
  }

  ngOnDestroy(): void{
    this.filterDataSubscription?.unsubscribe();
    this.countryListSubscription?.unsubscribe();
  }

}
