import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanCulturalComponent } from './rajasthan-cultural.component';

describe('RajasthanCulturalComponent', () => {
  let component: RajasthanCulturalComponent;
  let fixture: ComponentFixture<RajasthanCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajasthanCulturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajasthanCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
