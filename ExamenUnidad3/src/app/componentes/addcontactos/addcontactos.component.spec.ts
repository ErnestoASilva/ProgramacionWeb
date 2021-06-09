import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontactosComponent } from './addcontactos.component';

describe('AddcontactosComponent', () => {
  let component: AddcontactosComponent;
  let fixture: ComponentFixture<AddcontactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcontactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
