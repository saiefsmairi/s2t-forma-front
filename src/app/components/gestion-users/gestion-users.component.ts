import { UserInfoDialogComponent } from './../user-info-dialog/user-info-dialog.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/Services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  tab: any[];
  constructor(private httpClient: HttpClient,  private userService: UserService,public dialog: MatDialog) { }

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
  openDialog(certifs: any): void {
  console.log(certifs)

    const dialogRef = this.dialog.open(UserInfoDialogComponent, {
      width: '700px',
      data:  certifs ,
    });
  }

  validerCompte(id:any){
console.log(id);
this.userService.validerCompte(id).subscribe(data=>{
  console.log(data);
});
  }


}
