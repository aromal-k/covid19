import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {
  public showPopup = false;
  public popupData;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  /**
   * @description Function for handling the logout icon click
   */
  public logoutClick(): void {
    this.popupData = {
      showPopup: true,
      action: 'logout',
      heading: 'Logout',
      message: 'Are you about to exit your account?',
      primaryBtn: 'Yes',
      secondaryBtn: 'No',
      selectedBtn: ''
    };
    this.showPopup = true;
  }
  /**
   * @description Function for accepting the data emitted from the popup component
   * @param event event passed from the popup component
   */
  public dialogEvent(event): void {
    this.showPopup = false;
    if (event) {
      this.router.navigate(['login']);
    }
  }
}
