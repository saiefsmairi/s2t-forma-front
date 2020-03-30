import { UserInfoDialogComponent } from "./../user-info-dialog/user-info-dialog.component";
import { Component, OnInit } from "@angular/core";
import { UserService } from "app/Services/user.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { GestionnaireService } from "app/Services/gestionnaire.service";

@Component({
  selector: "app-gestion-users",
  templateUrl: "./gestion-users.component.html",
  styleUrls: ["./gestion-users.component.css"]
})
export class GestionUsersComponent implements OnInit {
  tab: any[];
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private gestionnaireService: GestionnaireService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let res = this.gestionnaireService.getAllUsers();
    res.subscribe(
      data => {
      
        this.tab = data;
     
      },
      err => {
        console.log("breaks here getallusers");
        // this.errorMessage = err.error.message;
      }
    );
  }
  openDialog(certifs: any): void {
    console.log(certifs);

    const dialogRef = this.dialog.open(UserInfoDialogComponent, {
      width: "700px",
      data: certifs
    });
  }

  SupprimerCompte(id:any){
    this.gestionnaireService.SupprimerUsers(id).subscribe(data => {
      this.tab=[];
      this.ngOnInit();
    });

  }

  validerCompte(id: any) {
    console.log(id);
    this.gestionnaireService.validerCompte(id).subscribe(data => {
      console.log(data);
      this.tab=[];
      this.ngOnInit(); 
 
    });
    let res = this.userService.getuserByid(id);
    res.subscribe(
      data1 => {

        this.userService.SendMail(data1.nom,data1.prenom,data1.email).subscribe(
          data => {
            console.log(data);
         
          },
          err => {
            console.log("breaks here");
            // this.errorMessage = err.error.message;
          }
        );
      },
      err => {
        console.log("breaks here getuserbyid");
      }
    );


    }
}
