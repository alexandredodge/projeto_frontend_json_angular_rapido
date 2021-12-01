import { Conta } from './../Conta.model';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Router } from '@angular/router'





@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html',
  styleUrls: ['./conta-create.component.css']
})
export class ContaCreateComponent implements OnInit {

    conta:Conta = {
		agencia: '',
		conta: '',
		operacao: ''
	}

  constructor(private router:Router,private contaService:ContaService) { }

  ngOnInit() {
	 
  }
  
  createConta():void{
    this.contaService.criarCOnta(this.conta).subscribe(() =>{
      this.contaService.mostrarMensagem('Conta criada com sucesso!');
      this.router.navigate(['/contas']);
    })
  }

  cancel(){
    this.router.navigate(['/contas']);
  }
 
}
