import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Observable } from 'rxjs';
import { CovidCases } from 'src/app/modules/shared/interfaces/covid-cases.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public covidCasesData$: Observable<CovidCases>;
  constructor(private readonly commonService: CommonService, private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.getCovidDetails();
  }
  /**
   * @description Function for fetching the covid data from API
   */
  public getCovidDetails(): void {
    this.covidCasesData$ = this.apiService.getCovidCases();
  }
}
