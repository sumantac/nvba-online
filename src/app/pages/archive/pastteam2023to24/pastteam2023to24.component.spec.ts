import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastteam2023to24Component } from './pastteam2023to24.component';

describe('Pastteam2023to24Component', () => {
  let component: Pastteam2023to24Component;
  let fixture: ComponentFixture<Pastteam2023to24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pastteam2023to24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastteam2023to24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
