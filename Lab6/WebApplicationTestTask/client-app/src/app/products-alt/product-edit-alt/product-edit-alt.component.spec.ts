import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditAltComponent } from './product-edit-alt.component';

describe('ProductEditAltComponent', () => {
  let component: ProductEditAltComponent;
  let fixture: ComponentFixture<ProductEditAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
