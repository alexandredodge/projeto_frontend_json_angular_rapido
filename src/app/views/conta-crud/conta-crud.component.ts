
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-crud',
  templateUrl: './conta-crud.component.html',
  styleUrls: ['./conta-crud.component.css']
})
export class ContaCrudComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigationContaCreate():void{
	this.router.navigate(['/contas/create']);
  }

}
