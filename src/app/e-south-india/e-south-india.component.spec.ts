import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESouthIndiaComponent } from './e-south-india.component';

describe('ESouthIndiaComponent', () => {
  let component: ESouthIndiaComponent;
  let fixture: ComponentFixture<ESouthIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESouthIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESouthIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
