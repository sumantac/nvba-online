import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsdeskComponent } from './presidentsdesk.component';

describe('PresidentsdeskComponent', () => {
  let component: PresidentsdeskComponent;
  let fixture: ComponentFixture<PresidentsdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentsdeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentsdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
