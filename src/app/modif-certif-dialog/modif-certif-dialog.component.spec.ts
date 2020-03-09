import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCertifDialogComponent } from './modif-certif-dialog.component';

describe('ModifCertifDialogComponent', () => {
  let component: ModifCertifDialogComponent;
  let fixture: ComponentFixture<ModifCertifDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifCertifDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCertifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
