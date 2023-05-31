import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraswatiComponent } from './saraswati.component';

describe('SaraswatiComponent', () => {
  let component: SaraswatiComponent;
  let fixture: ComponentFixture<SaraswatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaraswatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaraswatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
