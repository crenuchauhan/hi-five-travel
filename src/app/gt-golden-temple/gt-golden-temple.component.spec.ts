import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTGOLDENTEMPLEComponent } from './gt-golden-temple.component';

describe('GTGOLDENTEMPLEComponent', () => {
  let component: GTGOLDENTEMPLEComponent;
  let fixture: ComponentFixture<GTGOLDENTEMPLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GTGOLDENTEMPLEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GTGOLDENTEMPLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
