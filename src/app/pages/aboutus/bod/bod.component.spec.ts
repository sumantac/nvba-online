import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodComponent } from './bod.component';

describe('BodComponent', () => {
  let component: BodComponent;
  let fixture: ComponentFixture<BodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
