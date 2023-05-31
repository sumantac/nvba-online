import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventticketsComponent } from './eventtickets.component';

describe('EventticketsComponent', () => {
  let component: EventticketsComponent;
  let fixture: ComponentFixture<EventticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
