import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCertifDialogComponent } from './upload-certif-dialog.component';

describe('UploadCertifDialogComponent', () => {
  let component: UploadCertifDialogComponent;
  let fixture: ComponentFixture<UploadCertifDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCertifDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCertifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
