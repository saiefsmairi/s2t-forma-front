import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
private nom='test';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  typeuser2(){
    this.router.navigate(['/signup', 'apprenant']);
  }
  typeuser1(){
    this.router.navigate(['/signup', 'formateur']);
  }
  typeuser3(){
    this.router.navigate(['/signup', 'societe']);
  }
}

