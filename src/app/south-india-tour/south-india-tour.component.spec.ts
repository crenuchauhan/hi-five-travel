import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthIndiaTourComponent } from './south-india-tour.component';

describe('SouthIndiaTourComponent', () => {
  let component: SouthIndiaTourComponent;
  let fixture: ComponentFixture<SouthIndiaTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthIndiaTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthIndiaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
