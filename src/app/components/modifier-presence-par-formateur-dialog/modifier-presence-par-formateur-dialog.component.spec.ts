import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPresenceParFormateurDialogComponent } from './modifier-presence-par-formateur-dialog.component';

describe('ModifierPresenceParFormateurDialogComponent', () => {
  let component: ModifierPresenceParFormateurDialogComponent;
  let fixture: ComponentFixture<ModifierPresenceParFormateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPresenceParFormateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPresenceParFormateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
