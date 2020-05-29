import { UserInfoDialogComponent } from "./../user-info-dialog/user-info-dialog.component";
import { Component, OnInit } from "@angular/core";
import { UserService } from "app/Services/user.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { GestionnaireService } from "app/Services/gestionnaire.service";
import { ModifierUserByGestionnaireComponent } from "../modifier-user-by-gestionnaire/modifier-user-by-gestionnaire.component";

@Component({
  selector: "app-gestion-users",
  templateUrl: "./gestion-users.component.html",
  styleUrls: ["./gestion-users.component.css"]
})
export class GestionUsersComponent implements OnInit {
  tab: any[];
  tabFormateur:any [];
  tabApprenant:any [];

  cin;
  nom;
  tel;
  cin2;
  nom2;
  tel2;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private gestionnaireService: GestionnaireService,
    public dialog: MatDialog
  ) {}

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
  openDialog(certifs: any): void {
    console.log(certifs);

    const dialogRef = this.dialog.open(UserInfoDialogComponent, {
      width: "700px",
      data: certifs
    });
  }

  SupprimerCompte(id:any,type_compte){
    this.gestionnaireService.SupprimerUsers(id).subscribe(data => {
      if(type_compte=='Formateur'){
        this.tabFormateur=[];
      }
      else  if(type_compte=='Apprenant'){
        this.tabApprenant=[];
      }
      
      this.ngOnInit();
    });

  }

  openDialogToModify(nom,prenom,cin,email,tel,id:any){

    const dialogRef = this.dialog.open(ModifierUserByGestionnaireComponent, {
      width: '500px',
      data: {nom,prenom,cin,email, tel,id },
    });
  
  dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');
    this.ngOnInit();

  })
  
  
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

    this.userService.sendnotif(id,2).subscribe(data=>{
      console.log('notified');
    
    });
    

    }

  
}
