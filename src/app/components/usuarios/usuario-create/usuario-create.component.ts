import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

   usuario:Usuario = {
	   name:'',
	   login:'',
	   senha:''
   }

  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void{
    this.usuarioService.create(this.usuario).subscribe( () =>{
        this.usuarioService.showMessage('Usuário salvo com sucesso!');
        this.router.navigate(['/usuarios']);
    } )
  }

  cancel(){
    this.router.navigate(['/usuarios']);
  }

}
