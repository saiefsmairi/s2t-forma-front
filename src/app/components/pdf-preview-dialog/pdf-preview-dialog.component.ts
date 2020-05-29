import { SessionService } from 'app/Services/session.service';
import { Component, OnInit, Inject, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './pdf-preview-dialog.component.html',
  styleUrls: ['./pdf-preview-dialog.component.css']
})
export class PdfPreviewDialogComponent implements OnInit {
  pdfSrc:any;



  constructor(public dialogRef: MatDialogRef<PdfPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public sessionService:SessionService){
    this.pdfSrc ='data:application/pdf;base64,'+this.data.file;
  console.log(this.data.file);

      
    }

  ngOnInit(): void {
    

  }

}
