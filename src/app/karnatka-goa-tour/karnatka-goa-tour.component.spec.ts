import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnatkaGoaTourComponent } from './karnatka-goa-tour.component';

describe('KarnatkaGoaTourComponent', () => {
  let component: KarnatkaGoaTourComponent;
  let fixture: ComponentFixture<KarnatkaGoaTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnatkaGoaTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarnatkaGoaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
