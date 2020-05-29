import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreReclamationGestDialogComponent } from './repondre-reclamation-gest-dialog.component';

describe('RepondreReclamationGestDialogComponent', () => {
  let component: RepondreReclamationGestDialogComponent;
  let fixture: ComponentFixture<RepondreReclamationGestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreReclamationGestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreReclamationGestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
