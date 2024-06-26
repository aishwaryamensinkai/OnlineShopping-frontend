import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(public registrationService: RegistrationService, public router: Router) { }
  canActivate(): boolean {
    // const a = this.registrationService.isAuthenticatedFunction();
    // console.log(a)
    if (this.registrationService.isAuthenticatedFunction()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }

}