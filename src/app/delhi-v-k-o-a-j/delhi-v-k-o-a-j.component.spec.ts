import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELHIVKOAJComponent } from './delhi-v-k-o-a-j.component';

describe('DELHIVKOAJComponent', () => {
  let component: DELHIVKOAJComponent;
  let fixture: ComponentFixture<DELHIVKOAJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELHIVKOAJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DELHIVKOAJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
