import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticGoaComponent } from './exotic-goa.component';

describe('ExoticGoaComponent', () => {
  let component: ExoticGoaComponent;
  let fixture: ComponentFixture<ExoticGoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticGoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoticGoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
