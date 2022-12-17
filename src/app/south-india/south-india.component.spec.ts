import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthIndiaComponent } from './south-india.component';

describe('SouthIndiaComponent', () => {
  let component: SouthIndiaComponent;
  let fixture: ComponentFixture<SouthIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
