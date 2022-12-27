import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerlaBlackwaterComponent } from './kerla-blackwater.component';

describe('KerlaBlackwaterComponent', () => {
  let component: KerlaBlackwaterComponent;
  let fixture: ComponentFixture<KerlaBlackwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KerlaBlackwaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KerlaBlackwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
