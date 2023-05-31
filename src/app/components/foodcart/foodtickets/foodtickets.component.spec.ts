import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodticketsComponent } from './foodtickets.component';

describe('FoodticketsComponent', () => {
  let component: FoodticketsComponent;
  let fixture: ComponentFixture<FoodticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
