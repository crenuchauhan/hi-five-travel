import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndiaComponent } from './north-india.component';

describe('NorthIndiaComponent', () => {
  let component: NorthIndiaComponent;
  let fixture: ComponentFixture<NorthIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
