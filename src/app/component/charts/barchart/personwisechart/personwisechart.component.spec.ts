import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonwisechartComponent } from './personwisechart.component';

describe('PersonwisechartComponent', () => {
  let component: PersonwisechartComponent;
  let fixture: ComponentFixture<PersonwisechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonwisechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonwisechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
