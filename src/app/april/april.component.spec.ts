import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilComponent } from './april.component';

describe('AprilComponent', () => {
  let component: AprilComponent;
  let fixture: ComponentFixture<AprilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprilComponent]
    });
    fixture = TestBed.createComponent(AprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
