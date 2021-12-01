import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  usuarios:Usuario[];
  colunasVisiveis = ['id','name','login','action'];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.buscarTodosUsuarios().subscribe( usuarioRet =>{
       this.usuarios = usuarioRet;
       console.log(this.usuarios);
    });
  }

}
