import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChuleton } from './add-chuleton';

describe('AddChuleton', () => {
  let component: AddChuleton;
  let fixture: ComponentFixture<AddChuleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChuleton],
    }).compileComponents();

    fixture = TestBed.createComponent(AddChuleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
