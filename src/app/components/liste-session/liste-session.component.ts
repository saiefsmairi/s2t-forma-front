import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/Services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { AjoutRecuSessionDialogComponent } from '../ajout-recu-session-dialog/ajout-recu-session-dialog.component';


@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.css']
})
export class ListeSessionComponent implements OnInit {
  tab: any[];
  theme;
  prix;
  value: string;
  selectedValue;

  constructor(private sessionService: SessionService, public dialog: MatDialog) { }

  ngOnInit(): void {

    const res = this.sessionService.getAllSessions();
      res.subscribe(
        data => {
          this.tab = data;
          console.log(data);
        },
        err => {
          console.log('breaks here getAllSessions');
        }
      );
  }

  //filters by theme and prix this method weli tahtha 
  search(test: any) {
    if (this.theme !='') {
      this.tab = this.tab.filter(res => {
        return res.theme.toLocaleLowerCase().match(this.theme.toLocaleLowerCase());
      })
    } else if (this.theme =='') {
      this.tab = [];
      this.ngOnInit();
    }

}

searchPrix(test: any) {
  if (this.prix !='') {
    if (this.selectedValue =='>') {
    this.tab=this.tab.filter(res=>{
      console.log(res.prix +" "+this.prix);

      return res.prix>this.prix;
    })
    }

    else   if (this.selectedValue =='inf') {
//not working
      this.tab=this.tab.filter(res=>{
        console.log(res.prix +" "+test);
        return (res.prix<this.prix);

      })
      }

      else   if (this.selectedValue =='=') {
        this.tab=this.tab.filter(res=>{
          return res.prix.toString().match(this.prix);
        })
        }
  } 
  
  else if (this.prix =='') {
    this.tab = [];
    this.ngOnInit();
  }

}

openDialog(theme:any,prix:any){

  const dialogRef = this.dialog.open(AjoutRecuSessionDialogComponent, {
    width: '700px',
    data: { theme,prix },
  });

dialogRef.afterClosed().subscribe(result=>{
  console.log("back to gestion session "+result.user_id);

})


}

}
