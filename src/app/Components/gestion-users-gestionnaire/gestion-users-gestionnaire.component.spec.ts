import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsersGestionnaireComponent } from './gestion-users-gestionnaire.component';

describe('GestionUsersGestionnaireComponent', () => {
  let component: GestionUsersGestionnaireComponent;
  let fixture: ComponentFixture<GestionUsersGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUsersGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsersGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
