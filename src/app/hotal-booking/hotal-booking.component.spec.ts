import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalBookingComponent } from './hotal-booking.component';

describe('HotalBookingComponent', () => {
  let component: HotalBookingComponent;
  let fixture: ComponentFixture<HotalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotalBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
