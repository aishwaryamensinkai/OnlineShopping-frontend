import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {
  constructor(public registrationService: RegistrationService, public router: Router) { }

  canActivate(): boolean {
    // const a = this.registrationService.isAuthenticatedFunction();
    // console.log(a)
    if (!this.registrationService.isAuthenticatedFunction()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
