import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KASHMIRPARADISEComponent } from './kashmir-paradise.component';

describe('KASHMIRPARADISEComponent', () => {
  let component: KASHMIRPARADISEComponent;
  let fixture: ComponentFixture<KASHMIRPARADISEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KASHMIRPARADISEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KASHMIRPARADISEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
