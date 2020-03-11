import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   nom:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let res=this.authService.getuserByid(9);
    res.subscribe(
      data => {
        this.nom=data["nom"];
        console.log(data);

  },
  err => {
    console.log('breaks here');
           // this.errorMessage = err.error.message;

         }
    );

}
}
