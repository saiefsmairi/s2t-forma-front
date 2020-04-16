import { Component, OnInit } from '@angular/core';
import { GestionnaireService } from 'app/Services/gestionnaire.service';


@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.css']
})
export class ListeReclamationComponent implements OnInit {
  tab: any[];

  constructor(private gestionnaireService:GestionnaireService) { }

  ngOnInit(): void {
    let res = this.gestionnaireService.getAllReclamations();
  res.subscribe(
    data1 => {
      console.log
      (data1);
        this.tab = data1;
       
       
    },
    err => {
      console.log("breaks here get liste des reclamations");
    }
  );

  }

}
