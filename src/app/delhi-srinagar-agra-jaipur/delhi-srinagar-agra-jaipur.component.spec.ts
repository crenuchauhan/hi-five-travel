import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELHISRINAGARAGRAJAIPURComponent } from './delhi-srinagar-agra-jaipur.component';

describe('DELHISRINAGARAGRAJAIPURComponent', () => {
  let component: DELHISRINAGARAGRAJAIPURComponent;
  let fixture: ComponentFixture<DELHISRINAGARAGRAJAIPURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELHISRINAGARAGRAJAIPURComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DELHISRINAGARAGRAJAIPURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
