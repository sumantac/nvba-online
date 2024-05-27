import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kobipronam2024Component } from './kobipronam2024.component';

describe('Kobipronam2024Component', () => {
  let component: Kobipronam2024Component;
  let fixture: ComponentFixture<Kobipronam2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kobipronam2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kobipronam2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
