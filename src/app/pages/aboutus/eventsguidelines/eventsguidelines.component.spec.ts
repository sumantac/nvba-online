import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsguidelinesComponent } from './eventsguidelines.component';

describe('EventsguidelinesComponent', () => {
  let component: EventsguidelinesComponent;
  let fixture: ComponentFixture<EventsguidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsguidelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsguidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
