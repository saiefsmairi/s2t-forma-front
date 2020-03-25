import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectFormateurDialogComponent } from './affect-formateur-dialog.component';

describe('AffectFormateurDialogComponent', () => {
  let component: AffectFormateurDialogComponent;
  let fixture: ComponentFixture<AffectFormateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectFormateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectFormateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
