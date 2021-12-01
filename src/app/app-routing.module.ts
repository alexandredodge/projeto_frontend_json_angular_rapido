import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component'
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component' 
import { ProductUpdateComponent } from './components/product/product-update/product-update.component'
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component'
import { ContaCreateComponent } from './components/contas/conta-create/conta-create.component'
import { ContaCrudComponent } from './views/conta-crud/conta-crud.component'
import { ContaUpdateComponent } from './components/contas/conta-update/conta-update.component';
import { ContaDeleteComponent } from './components/contas/conta-delete/conta-delete.component';
import { UsuarioUpdateComponent } from './components/usuarios/usuario-update/usuario-update.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
	path:"products/create",
	component: ProductCreateComponent
},{
	path:"usuarios",
	component:UsuarioCrudComponent
},{
	path:"usuarios/create",
	component:UsuarioCreateComponent
},{
	path:"products/update/:id",
	component:ProductUpdateComponent
},{
	path:"products/delete/:id",
	component: ProductDeleteComponent
},{
	path:"contas",
	component: ContaCrudComponent
},{
	path:"contas/create",
	component: ContaCreateComponent
},{
	path:"contas/update/:id",
	component:ContaUpdateComponent
},{
	path:"contas/delete/:id",
	component:ContaDeleteComponent
},{
	path:"usuarios/update/:id",
	component:UsuarioUpdateComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
