import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsCheckComponent } from './user-details-check.component';

describe('UserDetailsCheckComponent', () => {
  let component: UserDetailsCheckComponent;
  let fixture: ComponentFixture<UserDetailsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
