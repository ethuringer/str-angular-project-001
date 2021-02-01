import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: Product[] = this.service.list;
  phrase: string = '';

  constructor( 
    private service: ProductService, 
    ) { }

  ngOnInit(): void {
  }

  featuredProduct: Product[] = this.service.getFeatured(true)
    .slice(0, 5);

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
