import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent } from './d-vara-khaj-orcha-agra-jaip-jodh-uda-m.component';

describe('DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent', () => {
  let component: DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent;
  let fixture: ComponentFixture<DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
