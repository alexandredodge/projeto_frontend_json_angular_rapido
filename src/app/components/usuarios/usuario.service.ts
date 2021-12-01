import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';


@Injectable({
    providedIn: 'root'
  })

export class UsuarioService{
	
    baseUrl = "http://localhost:3001/usuarios";

    constructor(private snackBar: MatSnackBar, private http:HttpClient){ }

    showMessage(msg:string):void{
		this.snackBar.open(msg,'X',{
			duration:3000,
			horizontalPosition: "right",
			verticalPosition: "top"
		})
    }
    
    
    create(usuario:Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(this.baseUrl,usuario);
    }

    buscarTodosUsuarios():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.baseUrl);
    }
}