import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-gestion-users-gestionnaire',
  templateUrl: './gestion-users-gestionnaire.component.html',
  styleUrls: ['./gestion-users-gestionnaire.component.css']
})
export class GestionUsersGestionnaireComponent implements OnInit {
tab: any[];
  constructor(private httpClient: HttpClient,  private userService: UserService) { }

  ngOnInit(): void {
    let res = this.userService.getAllUsers();
    res.subscribe(
      data => {
this.tab=data;
        console.log(this.tab);
      },
      err => {
        console.log("breaks here getallusers");
        // this.errorMessage = err.error.message;
      }
    );

  }

}
