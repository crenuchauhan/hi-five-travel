import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarnathComponent } from './amarnath.component';

describe('AmarnathComponent', () => {
  let component: AmarnathComponent;
  let fixture: ComponentFixture<AmarnathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarnathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmarnathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
