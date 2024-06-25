import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocCampComponent } from './loc-camp.component';

describe('LocCampComponent', () => {
  let component: LocCampComponent;
  let fixture: ComponentFixture<LocCampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocCampComponent]
    });
    fixture = TestBed.createComponent(LocCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
