import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-certif-dialog',
  templateUrl: './certif-dialog.component.html',
  styleUrls: ['./certif-dialog.component.css']
})
export class CertifDialogComponent implements OnInit {
  form: FormGroup;
  nom:string;
  date:string;
  constructor(public dialogRef: MatDialogRef<CertifDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomCertif : new FormControl('', [Validators.required]),
      dateCertif : new FormControl('', [Validators.required]),
    });


  }

save(){
  if(this.form.valid){
    this.dialogRef.close(this.f);
  }

}

get f() { return this.form.controls; }

onNoClick(): void {
  this.dialogRef.close();
}

}
