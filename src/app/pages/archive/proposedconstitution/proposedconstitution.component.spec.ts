import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedconstitutionComponent } from './proposedconstitution.component';

describe('ProposedconstitutionComponent', () => {
  let component: ProposedconstitutionComponent;
  let fixture: ComponentFixture<ProposedconstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedconstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposedconstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
