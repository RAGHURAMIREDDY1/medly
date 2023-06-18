import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersmangementComponent } from './ordersmangement.component';

describe('OrdersmangementComponent', () => {
  let component: OrdersmangementComponent;
  let fixture: ComponentFixture<OrdersmangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersmangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersmangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
