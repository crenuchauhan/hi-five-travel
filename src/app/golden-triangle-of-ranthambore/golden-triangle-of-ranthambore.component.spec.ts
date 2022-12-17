import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOLDENTRIANGLEOFRANTHAMBOREComponent } from './golden-triangle-of-ranthambore.component';

describe('GOLDENTRIANGLEOFRANTHAMBOREComponent', () => {
  let component: GOLDENTRIANGLEOFRANTHAMBOREComponent;
  let fixture: ComponentFixture<GOLDENTRIANGLEOFRANTHAMBOREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOLDENTRIANGLEOFRANTHAMBOREComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GOLDENTRIANGLEOFRANTHAMBOREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
