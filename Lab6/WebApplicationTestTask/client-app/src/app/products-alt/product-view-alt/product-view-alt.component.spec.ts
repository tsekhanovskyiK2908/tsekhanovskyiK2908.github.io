import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewAltComponent } from './product-view-alt.component';

describe('ProductViewAltComponent', () => {
  let component: ProductViewAltComponent;
  let fixture: ComponentFixture<ProductViewAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
