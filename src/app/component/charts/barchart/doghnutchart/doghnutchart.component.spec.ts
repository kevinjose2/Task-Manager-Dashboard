import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoghnutchartComponent } from './doghnutchart.component';

describe('DoghnutchartComponent', () => {
  let component: DoghnutchartComponent;
  let fixture: ComponentFixture<DoghnutchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoghnutchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoghnutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
