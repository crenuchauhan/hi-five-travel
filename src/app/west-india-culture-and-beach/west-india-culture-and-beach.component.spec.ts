import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestIndiaCultureAndBeachComponent } from './west-india-culture-and-beach.component';

describe('WestIndiaCultureAndBeachComponent', () => {
  let component: WestIndiaCultureAndBeachComponent;
  let fixture: ComponentFixture<WestIndiaCultureAndBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestIndiaCultureAndBeachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestIndiaCultureAndBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
