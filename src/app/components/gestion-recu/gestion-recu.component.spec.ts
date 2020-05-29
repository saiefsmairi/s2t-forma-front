import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRecuComponent } from './gestion-recu.component';

describe('GestionRecuComponent', () => {
  let component: GestionRecuComponent;
  let fixture: ComponentFixture<GestionRecuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRecuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
