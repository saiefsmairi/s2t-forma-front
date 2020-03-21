import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGestionnaireComponent } from './ajout-gestionnaire.component';

describe('AjoutGestionnaireComponent', () => {
  let component: AjoutGestionnaireComponent;
  let fixture: ComponentFixture<AjoutGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
