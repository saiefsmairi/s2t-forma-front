import { UserInfoDialogComponent } from "./../user-info-dialog/user-info-dialog.component";
import { Component, OnInit } from "@angular/core";
import { UserService } from "app/Services/user.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { GestionnaireService } from "app/Services/gestionnaire.service";
import { ModifierUserByGestionnaireComponent } from "../modifier-user-by-gestionnaire/modifier-user-by-gestionnaire.component";
@Component({
  selector: 'app-liste-all-users-admin',
  templateUrl: './liste-all-users-admin.component.html',
  styleUrls: ['./liste-all-users-admin.component.css']
})
export class ListeAllUsersAdminComponent implements OnInit {
  tab: any[];
  tabFormateur:any [];
  tabApprenant:any [];
  tabGestionnaire:any [];

  cin;
  nom;
  tel;
  cin2;
  nom2;
  tel2;
  constructor(  private httpClient: HttpClient,
    private userService: UserService,
    private gestionnaireService: GestionnaireService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
    let res = this.gestionnaireService.AllFormateurs();
    res.subscribe(
      data => {
      
        this.tabFormateur = data;
 
      },
      err => {

        console.log("breaks here getalformateurs");
        // this.errorMessage = err.error.message;
      }
    );

    let res3 = this.gestionnaireService.getAllGestionnaire()
    res3.subscribe(
      data => {
      console.log(data);
        this.tabGestionnaire = data;
 
      },
      err => {

        console.log("breaks here getalformateurs");
        // this.errorMessage = err.error.message;
      }
    );

    let res2 = this.gestionnaireService.AllApprenant();
    res2.subscribe(
      data => {
      
        this.tabApprenant = data;
 
      },
      err => {
        console.log("breaks here getallapprenants");

        // this.errorMessage = err.error.message;
      }
    );
  }
  

searchBycin(type: any) {
  if (this.cin !='') {
    this.tabFormateur = this.tabFormateur.filter(res => {
      return res.cin.toLocaleLowerCase().match(this.cin.toLocaleLowerCase());
    })
  } else if (this.cin =='') {
    this.tabFormateur = [];
    this.ngOnInit();
    
  }
}

openDialog(certifs: any): void {
  console.log(certifs);

  const dialogRef = this.dialog.open(UserInfoDialogComponent, {
    width: "700px",
    data: certifs
  });
}

searchByNom() {
  if (this.nom !='') {
    this.tabFormateur = this.tabFormateur.filter(res => {
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    })
  } else if (this.nom =='') {
    this.tabFormateur = [];
    this.ngOnInit();
    
  }

}



  }


