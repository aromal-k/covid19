import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/modules/core/services/common.service';
import { ApiService } from '../../shared/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-editing',
  templateUrl: './country-editing.component.html',
  styleUrls: ['./country-editing.component.scss']
})
export class CountryEditingComponent implements OnInit, OnDestroy {

  public countryForm;
  public selectedCountry;
  public countryId: number;
  public updateFailure = false;
  private countryListSubscription: Subscription;
  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly commonService: CommonService,
    private readonly apiService: ApiService) {
    this.createForm();
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryId = params.countryId;
    });
    const countryList = this.commonService.getCountryList();
    if (countryList.length > 0) {
      this.getCountryData();
    } else {
      this.countryListSubscription = this.apiService.getCountries().subscribe(data => {
        this.commonService.setCountryList(data);
        this.getCountryData();
      });
    }
  }
  /**
   * @description Function for building the form
   */
  public createForm(): void {
    this.countryForm = this.formBuilder.group({
      cases: new FormControl('0', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      deaths: new FormControl('0', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      recovered: new FormControl('0', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      tests: new FormControl('0', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    });
  }
  /**
   * @description Function for fetching the country data from the full array
   */
  public getCountryData(): void {
    this.selectedCountry = this.commonService.getCountryListById(this.countryId);
    this.setForm(this.selectedCountry);
  }
  /**
   * @description Function for binding the data to form fields
   * @param data the data for binding the form values
   */
  public setForm(data): void {
    this.countryForm.get('cases').value = data.cases;
    this.countryForm.get('deaths').value = data.deaths;
    this.countryForm.get('recovered').value = data.recovered;
    this.countryForm.get('tests').value = data.tests;
  }
  /**
   * @description Function for going back to the listing page
   */
  public gotoListing(): void {
    this.router.navigate(['home/country/country-listing']);
  }
  /**
   * @description Function for handling the cancel button click
   */
  public cancelEdit(): void {
    this.gotoListing();
  }
  /**
   * @description Function for handling the save button click
   */
  public updateCountry(): void {
    this.selectedCountry.cases = this.countryForm.value.cases;
    this.selectedCountry.deaths = this.countryForm.value.deaths;
    this.selectedCountry.recovered = this.countryForm.value.recovered;
    this.selectedCountry.tests = this.countryForm.value.tests;
    this.commonService.updateCountryList(this.countryId, this.selectedCountry);
    this.gotoListing();
  }

  ngOnDestroy(): void{
     this.countryListSubscription?.unsubscribe();
  }
}
