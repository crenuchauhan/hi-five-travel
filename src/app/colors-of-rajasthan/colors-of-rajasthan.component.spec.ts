import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsOfRajasthanComponent } from './colors-of-rajasthan.component';

describe('ColorsOfRajasthanComponent', () => {
  let component: ColorsOfRajasthanComponent;
  let fixture: ComponentFixture<ColorsOfRajasthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsOfRajasthanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsOfRajasthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
