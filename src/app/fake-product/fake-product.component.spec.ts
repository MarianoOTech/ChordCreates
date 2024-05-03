import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProductComponent } from './fake-product.component';

describe('FakeProductComponent', () => {
  let component: FakeProductComponent;
  let fixture: ComponentFixture<FakeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
