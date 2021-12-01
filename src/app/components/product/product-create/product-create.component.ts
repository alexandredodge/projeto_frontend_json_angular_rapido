import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router'
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
	  name: '',
	  price: null
  }

  constructor(private ProductService: ProductService,
	private router:Router) {
   }

  ngOnInit(): void {
	
  }

  createProduct():void{
	this.ProductService.create(this.product).subscribe(() => {// Ao retornar a resposta da requisição chamo a mensagem e redireciono a tela
		this.ProductService.showMessage('Produto criado!');
		this.router.navigate(['/products']);
	});
	
  }

  cancel():void{
	  this.router.navigate(['/products']);
  }

}
