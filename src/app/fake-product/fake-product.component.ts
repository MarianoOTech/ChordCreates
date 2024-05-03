import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FakeProductService } from '../../services/fake-product.service';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-product',
  standalone: true,
  imports: [RouterLink,FormsModule, CommonModule],
  templateUrl: './fake-product.component.html',
  styleUrl: './fake-product.component.scss'
})
export class FakeProductComponent {
  constructor(private fakeProductService: FakeProductService,
  ) 
  { }
  arrFakeProducts = [];

  ngAfterViewInit(): void {
    this.getFakeProducts();
   
  }

  private getFakeProducts()
  {
   this.fakeProductService.getFakeProducts().subscribe((fakeProducts: any) => {
     this.arrFakeProducts = fakeProducts;
     console.log(this.arrFakeProducts);
    });
  
  }
}
