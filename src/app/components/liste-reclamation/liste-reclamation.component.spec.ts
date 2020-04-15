import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamationComponent } from './liste-reclamation.component';

describe('ListeReclamationComponent', () => {
  let component: ListeReclamationComponent;
  let fixture: ComponentFixture<ListeReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
