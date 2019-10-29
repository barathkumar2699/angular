import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcopyComponent } from './headcopy.component';

describe('HeadcopyComponent', () => {
  let component: HeadcopyComponent;
  let fixture: ComponentFixture<HeadcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
