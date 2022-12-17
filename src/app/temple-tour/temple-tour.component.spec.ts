import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleTourComponent } from './temple-tour.component';

describe('TempleTourComponent', () => {
  let component: TempleTourComponent;
  let fixture: ComponentFixture<TempleTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
