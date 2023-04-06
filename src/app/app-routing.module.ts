import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { StyleboxInfoComponent } from './components/stylebox-info/stylebox-info.component';

const routes: Routes = [
  { path: '', component: InicialComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent},
  { path: 'area-privada', component: PrincipalComponent},
  { path: 'stylebox-info', component: StyleboxInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
