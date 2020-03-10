import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifDialogComponent } from './certif-dialog.component';

describe('CertifDialogComponent', () => {
  let component: CertifDialogComponent;
  let fixture: ComponentFixture<CertifDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
