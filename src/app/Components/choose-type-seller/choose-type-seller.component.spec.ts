import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeSellerComponent } from './choose-type-seller.component';

describe('ChooseTypeSellerComponent', () => {
  let component: ChooseTypeSellerComponent;
  let fixture: ComponentFixture<ChooseTypeSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypeSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypeSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
