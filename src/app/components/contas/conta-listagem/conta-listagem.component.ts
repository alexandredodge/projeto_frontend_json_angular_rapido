import { Component, OnInit } from '@angular/core';
import { Conta } from '../Conta.model'
import { ContaService } from '../conta.service'

@Component({
  selector: 'app-conta-listagem',
  templateUrl: './conta-listagem.component.html',
  styleUrls: ['./conta-listagem.component.css']
})
export class ContaListagemComponent implements OnInit {

  contas: Conta[];
  colunasVisiveis = ['id','agencia','conta','operacao','action'];

  constructor(private contaService:ContaService) { }

  ngOnInit():void {
	  this.contaService.buscarContas().subscribe(retorno =>{
		  this.contas = retorno;
		  console.log(this.contas);
	  });
  }

}
