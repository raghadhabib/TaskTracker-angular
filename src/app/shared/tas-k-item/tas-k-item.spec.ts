import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasKItem } from './tas-k-item';

describe('TasKItem', () => {
  let component: TasKItem;
  let fixture: ComponentFixture<TasKItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasKItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasKItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
