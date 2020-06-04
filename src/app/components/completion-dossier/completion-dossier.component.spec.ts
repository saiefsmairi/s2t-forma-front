import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionDossierComponent } from './completion-dossier.component';

describe('CompletionDossierComponent', () => {
  let component: CompletionDossierComponent;
  let fixture: ComponentFixture<CompletionDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
