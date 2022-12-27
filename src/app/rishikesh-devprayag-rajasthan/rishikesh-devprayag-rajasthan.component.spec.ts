import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikeshDevprayagRajasthanComponent } from './rishikesh-devprayag-rajasthan.component';

describe('RishikeshDevprayagRajasthanComponent', () => {
  let component: RishikeshDevprayagRajasthanComponent;
  let fixture: ComponentFixture<RishikeshDevprayagRajasthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RishikeshDevprayagRajasthanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RishikeshDevprayagRajasthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
