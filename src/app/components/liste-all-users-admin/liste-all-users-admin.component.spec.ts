import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAllUsersAdminComponent } from './liste-all-users-admin.component';

describe('ListeAllUsersAdminComponent', () => {
  let component: ListeAllUsersAdminComponent;
  let fixture: ComponentFixture<ListeAllUsersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAllUsersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAllUsersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
