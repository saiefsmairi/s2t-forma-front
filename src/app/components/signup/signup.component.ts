import { CertifDialogComponent } from './../certif-dialog/certif-dialog.component';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../Services/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray, Form } from '@angular/forms';
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

import { MatDialog } from '@angular/material/dialog';
import { MustMatch } from '../../Helpers/must-match';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
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

  form1: FormGroup;
  form2: FormGroup;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  type: string;
  hide = true;


  listCertif: Array<any>;
  nomCertif: string;
  dateCertif: string;
  i: number;

  private sub: any;
  constructor(
    private router: Router,

    private route: ActivatedRoute,
    private authService: AuthService,
    private _adapter: DateAdapter<any>,
    private formBuilder: FormBuilder,
    public dialog: MatDialog

  ) { }


  ngOnInit() {
    this.listCertif = [];
    this.sub = this.route.params.subscribe(params => {
      this.type = params.id;
    });
    this._adapter.setLocale('fr');
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      datenais: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      rib: new FormControl('', [Validators.required]),
      listCertif: new FormControl(this.listCertif)
    },
      { validator: MustMatch('password', 'confirmPass') });


    this.form1 = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        cin: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ]),
        nom: new FormControl(''),
        prenom: new FormControl(''),
        datenais: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPass: new FormControl('', [Validators.required]),
        tel: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ]),
      },
        { validator: MustMatch('password', 'confirmPass') });

    this.form2 = this.formBuilder.group({
          email: new FormControl('', [Validators.required, Validators.email]),
          cin: new FormControl('', [
            Validators.required,
            Validators.pattern('[0-9]{8}')
          ]),
          nom: new FormControl(''),
          password: new FormControl('', [Validators.required]),
          confirmPass: new FormControl('', [Validators.required]),
          tel: new FormControl('', [
            Validators.required,
            Validators.pattern('[0-9]{8}')
          ]),
        },
          { validator: MustMatch('password', 'confirmPass') });
      }



  onSubmit() {
    console.log(this.type);
    console.log(this.form);
    switch (this.type) {
     case 'formateur': {
      this.authService.registerFormateur(this.f).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigateByUrl('signin');
        },
        err => {
          console.log('breaks here');
          // this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
      break;
    }
  case 'apprenant': {
    this.authService.registerApprenant(this.f1).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('signin');
      },
      err => {
        console.log('breaks here');
        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    break;
  }
  case 'societe': {
    this.authService.registerSociete(this.f2).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('signin');
      },
      err => {
        console.log('breaks here');
        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  }
  }


  get f() { return this.form.controls; }
  get f1() { return this.form1.controls; }
  get f2() { return this.form2.controls; }

  openDialog(typeop: string): void {
    console.log(typeop);

    const dialogRef = this.dialog.open(CertifDialogComponent, {
      width: '300px',
      data: { typeop },
    });

    dialogRef.afterClosed().subscribe(result => {
      let canAdd = true;
      console.log('The dialog was closed');
      if (result != undefined && this.listCertif.length < 5) {
        this.nomCertif = result.nomCertif.value;
        this.dateCertif = result.dateCertif.value;
        for (let i = 0; i < this.listCertif.length; i++) {
          if (this.listCertif[i].name == this.nomCertif) {
            canAdd = false;
          }
        }
        if (canAdd) {
          this.listCertif.push({
            name: this.nomCertif,
            issue_date: this.dateCertif
          });
          console.table(this.listCertif);
        } else {
          console.table(this.listCertif);
        }



      }
    });
  }

  edit(item: any) {

    const index = this.listCertif.indexOf(item);

    const dialogRef = this.dialog.open(CertifDialogComponent, {
      width: '300px',
      data: { typeop: 'edit', name: item.name, issue_date: item.issue_date },
    });
    dialogRef.afterClosed().subscribe(result => {

      this.listCertif[index].name = result.nomCertif.value;
      this.listCertif[index].issue_date = result.dateCertif.value;

    });

  }

  delete(item: any) {

    const index = this.listCertif.indexOf(item);

    const dialogRef = this.dialog.open(CertifDialogComponent, {
      width: '300px',
      data: { typeop: 'delete' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'delete') {
        if (index > -1) {
          this.listCertif.splice(index, 1);
        }
        console.table(this.listCertif);

      }

    });

  }

<<<<<<< Updated upstream

=======
  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      this.form.get(key).clearValidators();
      this.form.get(key).updateValueAndValidity();
    }
  }
reset(form:FormGroup ){
form.reset();
this.removeValidators(form);


}
>>>>>>> Stashed changes


reset(form:FormGroup ){
form.reset();
}


}


