import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcheckoutComponent } from './foodcheckout.component';

describe('FoodcheckoutComponent', () => {
  let component: FoodcheckoutComponent;
  let fixture: ComponentFixture<FoodcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodcheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
