import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUserByGestionnaireComponent } from './modifier-user-by-gestionnaire.component';

describe('ModifierUserByGestionnaireComponent', () => {
  let component: ModifierUserByGestionnaireComponent;
  let fixture: ComponentFixture<ModifierUserByGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierUserByGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUserByGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
