import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiWithKeralaComponent } from './mumbai-with-kerala.component';

describe('MumbaiWithKeralaComponent', () => {
  let component: MumbaiWithKeralaComponent;
  let fixture: ComponentFixture<MumbaiWithKeralaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MumbaiWithKeralaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MumbaiWithKeralaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
