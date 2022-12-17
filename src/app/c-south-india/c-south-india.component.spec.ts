import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSouthIndiaComponent } from './c-south-india.component';

describe('CSouthIndiaComponent', () => {
  let component: CSouthIndiaComponent;
  let fixture: ComponentFixture<CSouthIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSouthIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSouthIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
