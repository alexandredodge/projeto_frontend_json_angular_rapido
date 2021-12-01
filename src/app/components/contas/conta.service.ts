import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Conta } from './Conta.model';

@Injectable({
    providedIn:'root'
})

export class ContaService{

    baseUrl = "http://localhost:3001/contas";

    constructor(private snackBar: MatSnackBar,private http:HttpClient){ }

    mostrarMensagem(msg:string):void{
        this.snackBar.open(msg,'x',{
            duration:3000,
            horizontalPosition: "right",
			verticalPosition: "top"
        })
    }

    criarCOnta(conta:Conta):Observable<Conta>{
        return this.http.post<Conta>(this.baseUrl,conta);
	}
    
    atualizarConta(conta:Conta):Observable<Conta>{
        const url = `${this.baseUrl}/${conta.id}`;
        return this.http.put<Conta>(url,conta);
    }

	buscarContas():Observable<Conta[]>{
		return this.http.get<Conta[]>(this.baseUrl);
    }
    
    buscarContaPorId(id:string):Observable<Conta>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Conta>(url);
    }

    delete(id:number):Observable<Conta>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Conta>(url);
    }
}