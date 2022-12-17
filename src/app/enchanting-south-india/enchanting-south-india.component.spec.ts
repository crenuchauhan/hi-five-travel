import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENCHANTINGSOUTHINDIAComponent } from './enchanting-south-india.component';

describe('ENCHANTINGSOUTHINDIAComponent', () => {
  let component: ENCHANTINGSOUTHINDIAComponent;
  let fixture: ComponentFixture<ENCHANTINGSOUTHINDIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENCHANTINGSOUTHINDIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENCHANTINGSOUTHINDIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
