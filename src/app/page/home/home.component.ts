import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: Product[] = this.service.list;

  constructor( 
    private service: ProductService, 
    private config: ConfigService
    ) { }

  ngOnInit(): void {
  }

}
