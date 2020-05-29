import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRecuDialogComponent } from './photo-recu-dialog.component';

describe('PhotoRecuDialogComponent', () => {
  let component: PhotoRecuDialogComponent;
  let fixture: ComponentFixture<PhotoRecuDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRecuDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRecuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
