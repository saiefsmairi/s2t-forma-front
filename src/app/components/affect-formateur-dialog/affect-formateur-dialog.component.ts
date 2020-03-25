import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-affect-formateur-dialog',
  templateUrl: './affect-formateur-dialog.component.html',
  styleUrls: ['./affect-formateur-dialog.component.css']
})
export class AffectFormateurDialogComponent implements OnInit {
  form: FormGroup;
  nom:string;
  date:string;
  listFormateur:any;
  constructor(public dialogRef: MatDialogRef<AffectFormateurDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private gestinnaireService: GestionnaireService) {

               }

  ngOnInit(): void {
this.gestinnaireService.getAllFormateurs().subscribe((res)=>{
  this.listFormateur=res;
}

);

  }

}
