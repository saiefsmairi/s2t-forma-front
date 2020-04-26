import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfileDialogComponent } from './photo-profile-dialog.component';

describe('PhotoProfileDialogComponent', () => {
  let component: PhotoProfileDialogComponent;
  let fixture: ComponentFixture<PhotoProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
