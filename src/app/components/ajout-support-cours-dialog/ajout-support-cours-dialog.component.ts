import { SessionService } from 'app/Services/session.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './ajout-support-cours-dialog.component.html',
  styleUrls: ['./ajout-support-cours-dialog.component.css']
})
export class AjoutSupportCoursDialogComponent implements OnInit {
  form: FormGroup;
  nom:string;
  imgURL: any;
  selectedFile: File;
  pdfSrc;
  pdfPath;
  typeop;
  document:any;
  constructor(public dialogRef: MatDialogRef<AjoutSupportCoursDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public sessionService : SessionService) {
    
    }
  ngOnInit(): void {
this.typeop=this.data.typeop;
this.document=this.data.document;
console.log(this.document)
  this.FormInit();



  }

  public onFileChanged(event:any) {
    
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    this.pdfPath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
   
    this.pdfSrc = reader.result;


console.log(this.pdfSrc)

    };
  }

  get f() { return this.form.controls; }

onSubmit(){

  const uploadPdfData = new FormData();
  uploadPdfData.append('File', this.selectedFile);
  uploadPdfData.set('sessionId', this.data.id);
  uploadPdfData.set('name', this.f.name.value);
console.log( uploadPdfData.get('sessionId'))
this.sessionService.ajoutSupportCours(uploadPdfData).subscribe(res=>{
this.dialogRef.close("ajouté");
 });

}


onEdit(){
 
  const uploadPdfData = new FormData();
  uploadPdfData.append('File', this.selectedFile);
  uploadPdfData.set('id', this.data.id);
  uploadPdfData.set('name', this.f.name.value);

this.sessionService.EditSupportCours(uploadPdfData).subscribe(res=>{
this.dialogRef.close("modifié");
 });

}


onNoClick(){
  this.dialogRef.close();
}

FormInit(){
  this.form =this.typeop==='Add'? this.formBuilder.group({
    name : new FormControl(this.nom, [Validators.required]),
  }):this.formBuilder.group({
    name : new FormControl(this.document.name, [Validators.required]),
  });
}


}
