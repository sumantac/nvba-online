import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobipronamComponent } from './kobipronam.component';

describe('KobipronamComponent', () => {
  let component: KobipronamComponent;
  let fixture: ComponentFixture<KobipronamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KobipronamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KobipronamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
