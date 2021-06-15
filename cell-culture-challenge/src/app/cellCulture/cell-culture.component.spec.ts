import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCultureComponent } from './cell-culture.component';

describe('CellCultureComponent', () => {
  let component: CellCultureComponent;
  let fixture: ComponentFixture<CellCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
