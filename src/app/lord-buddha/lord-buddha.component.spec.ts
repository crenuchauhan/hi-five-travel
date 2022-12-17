import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordBuddhaComponent } from './lord-buddha.component';

describe('LordBuddhaComponent', () => {
  let component: LordBuddhaComponent;
  let fixture: ComponentFixture<LordBuddhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordBuddhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LordBuddhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
