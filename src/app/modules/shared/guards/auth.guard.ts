import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Constants } from '../constants/constant';
import { CommonService } from '../../core/services/common.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly common: CommonService
  ) { }
  /**
   * @description Function for handling the can activate while routing
   */
  public canActivate(): boolean {
    const userDetails: any = this.common.getUserDetails();
    if (userDetails.userName === Constants.userCredentials.username &&
      userDetails.password === Constants.userCredentials.password) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
