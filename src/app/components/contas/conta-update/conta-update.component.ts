import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../Conta.model';
import { ContaService } from '../conta.service';


@Component({
  selector: 'app-conta-update',
  templateUrl: './conta-update.component.html',
  styleUrls: ['./conta-update.component.css']
})
export class ContaUpdateComponent implements OnInit {

  conta:Conta;

  constructor(
      private router:Router, 
      private contaService: ContaService,
      private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contaService.buscarContaPorId(id).subscribe( contaRet =>{
      this.conta = contaRet;
    } )
  }

  updateConta():void{
    this.contaService.atualizarConta(this.conta).subscribe( () =>{
      this.contaService.mostrarMensagem('Conta atualizada com sucesso!');
      this.router.navigate(['/contas']);
    } )
  }

  cancel(){
    this.router.navigate(['/contas']);
  }

}
