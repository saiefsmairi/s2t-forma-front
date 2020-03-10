import { TokenStorageService } from './../Services/token-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router:Router,
   private tokenService: TokenStorageService
  ) {}
  canActivate():boolean{

    if(this.tokenService.getToken()!==null){
      return true;
    }
    else{
this.router.navigate(['signin']);
return false;
    }
  }

}
