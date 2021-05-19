import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoSecundarioComponent } from './cuerpo-secundario.component';

describe('CuerpoSecundarioComponent', () => {
  let component: CuerpoSecundarioComponent;
  let fixture: ComponentFixture<CuerpoSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
