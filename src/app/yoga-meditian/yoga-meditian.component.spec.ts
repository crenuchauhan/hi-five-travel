import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaMeditianComponent } from './yoga-meditian.component';

describe('YogaMeditianComponent', () => {
  let component: YogaMeditianComponent;
  let fixture: ComponentFixture<YogaMeditianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaMeditianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaMeditianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
