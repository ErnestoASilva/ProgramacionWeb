import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontactosComponent } from './listcontactos.component';

describe('ListcontactosComponent', () => {
  let component: ListcontactosComponent;
  let fixture: ComponentFixture<ListcontactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcontactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
