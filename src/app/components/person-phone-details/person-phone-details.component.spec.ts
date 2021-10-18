import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPhoneDetailsComponent } from './person-phone-details.component';

describe('PersonPhoneDetailsComponent', () => {
  let component: PersonPhoneDetailsComponent;
  let fixture: ComponentFixture<PersonPhoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonPhoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPhoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
