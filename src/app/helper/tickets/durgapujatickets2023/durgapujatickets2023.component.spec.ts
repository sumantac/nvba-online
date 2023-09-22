import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapujatickets2023Component } from './durgapujatickets2023.component';

describe('Durgapujatickets2023Component', () => {
  let component: Durgapujatickets2023Component;
  let fixture: ComponentFixture<Durgapujatickets2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgapujatickets2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durgapujatickets2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
