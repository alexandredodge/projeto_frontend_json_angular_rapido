import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../Conta.model';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-delete',
  templateUrl: './conta-delete.component.html',
  styleUrls: ['./conta-delete.component.css']
})
export class ContaDeleteComponent implements OnInit {

  conta:Conta

  constructor(
      private router:Router,
      private route:ActivatedRoute,
      private contaService:ContaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contaService.buscarContaPorId(id).subscribe( contaRet =>{
        this.conta = contaRet;
    } )
  }


  deleteConta():void{
    this.contaService.delete(this.conta.id).subscribe(()=>{
        this.contaService.mostrarMensagem("Conta exclída com sucesso!");
        this.router.navigate(['/contas']);
    })
  }

  cancel(){
    this.router.navigate(['/contas']);
  }

}
