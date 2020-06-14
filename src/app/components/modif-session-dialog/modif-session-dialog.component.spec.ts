import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSessionDialogComponent } from './modif-session-dialog.component';

describe('ModifSessionDialogComponent', () => {
  let component: ModifSessionDialogComponent;
  let fixture: ComponentFixture<ModifSessionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSessionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
