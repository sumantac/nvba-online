import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscheckoutComponent } from './eventscheckout.component';

describe('EventscheckoutComponent', () => {
  let component: EventscheckoutComponent;
  let fixture: ComponentFixture<EventscheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventscheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventscheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
