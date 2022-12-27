import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestIndiaCultureComponent } from './west-india-culture.component';

describe('WestIndiaCultureComponent', () => {
  let component: WestIndiaCultureComponent;
  let fixture: ComponentFixture<WestIndiaCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestIndiaCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestIndiaCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
