import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrissaGoldenTriangleComponent } from './orissa-golden-triangle.component';

describe('OrissaGoldenTriangleComponent', () => {
  let component: OrissaGoldenTriangleComponent;
  let fixture: ComponentFixture<OrissaGoldenTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrissaGoldenTriangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrissaGoldenTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
