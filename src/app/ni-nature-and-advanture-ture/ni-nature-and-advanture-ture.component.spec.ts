import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NINatureAndAdvantureTureComponent } from './ni-nature-and-advanture-ture.component';

describe('NINatureAndAdvantureTureComponent', () => {
  let component: NINatureAndAdvantureTureComponent;
  let fixture: ComponentFixture<NINatureAndAdvantureTureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NINatureAndAdvantureTureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NINatureAndAdvantureTureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
