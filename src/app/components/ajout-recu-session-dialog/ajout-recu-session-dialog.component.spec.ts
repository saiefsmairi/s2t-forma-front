import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRecuSessionDialogComponent } from './ajout-recu-session-dialog.component';

describe('AjoutRecuSessionDialogComponent', () => {
  let component: AjoutRecuSessionDialogComponent;
  let fixture: ComponentFixture<AjoutRecuSessionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutRecuSessionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRecuSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
