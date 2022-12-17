import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENLIGHTENMENTOFBUDDHATOURComponent } from './enlightenment-of-buddha-tour.component';

describe('ENLIGHTENMENTOFBUDDHATOURComponent', () => {
  let component: ENLIGHTENMENTOFBUDDHATOURComponent;
  let fixture: ComponentFixture<ENLIGHTENMENTOFBUDDHATOURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENLIGHTENMENTOFBUDDHATOURComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENLIGHTENMENTOFBUDDHATOURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
