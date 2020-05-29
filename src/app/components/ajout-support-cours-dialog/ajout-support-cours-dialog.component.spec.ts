import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSupportCoursDialogComponent } from './ajout-support-cours-dialog.component';

describe('AjoutSupportCoursDialogComponent', () => {
  let component: AjoutSupportCoursDialogComponent;
  let fixture: ComponentFixture<AjoutSupportCoursDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSupportCoursDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSupportCoursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
