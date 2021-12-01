import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-leitura',
  templateUrl: './product-leitura.component.html',
  styleUrls: ['./product-leitura.component.css']
})
export class ProductLeituraComponent implements OnInit {

	products: Product[];
	colunasVisiveis = ['id','name','price','action'];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
	 this.productService.findAllProdutos().subscribe(produtosResposta =>{
		 this.products = produtosResposta
		 console.log(this.products)
	 })
  }

}
