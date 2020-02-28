import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTypeUserComponent } from './choix-type-user.component';

describe('ChoixTypeUserComponent', () => {
  let component: ChoixTypeUserComponent;
  let fixture: ComponentFixture<ChoixTypeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixTypeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
