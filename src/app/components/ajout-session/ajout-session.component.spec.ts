import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSessionComponent } from './ajout-session.component';

describe('GestionSessionsComponent', () => {
  let component: AjoutSessionComponent;
  let fixture: ComponentFixture<AjoutSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
