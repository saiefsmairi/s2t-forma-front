import { CertifDialogComponent } from './../certif-dialog/certif-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import { MustMatch } from '../Helpers/MustMatch';
import { MatDialog } from '@angular/material/dialog';

// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  type: string;
  hide = true;
  listCertif: Array<any> ;
  nomCertif: string;
  dateCertif: string;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private _adapter: DateAdapter<any>,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    this.listCertif = [];
    this.sub = this.route.params.subscribe(params => {
      this.type = params.id;
    });
    this._adapter.setLocale('fr');
    this.form = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      cin : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nom : new FormControl(''),
      prenom : new FormControl(''),
      datenais : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      confirmPass : new FormControl('', [Validators.required]),
      tel : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      rib: new FormControl('', [Validators.required]),
      listCertif: new FormControl(this.listCertif)
    },
    {validator: MustMatch('password', 'confirmPass')});
  }

  onSubmit() {
    console.log(this.type);
    console.log(this.form);
    this.authService.register(this.f, this.type).subscribe(
       data => {
         console.log(data);
         this.isSuccessful = true;
         this.isSignUpFailed = false;
       },
       err => {
console.log('breaks here');
         // this.errorMessage = err.error.message;
this.isSignUpFailed = true;
       }
     );
   }


get f() { return this.form.controls; }

openDialog(typeop:string): void {
  console.log(typeop)

  const dialogRef = this.dialog.open(CertifDialogComponent, {
    width: '300px',
  data:{typeop:typeop},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if (result != undefined && this.listCertif.length<5) {

  this.nomCertif = result.nomCertif.value;
  this.dateCertif = result.dateCertif.value;
  this.listCertif.push({
name: this.nomCertif,
issue_date: this.dateCertif
});
  console.table(this.listCertif);

}


  });
}


}


