import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { StyleboxInfoComponent } from './components/stylebox-info/stylebox-info.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { AreaPrivadaComponent } from './components/area-privada/area-privada.component';
import { StyleboxComponent } from './components/stylebox/stylebox.component';
import { Look1Component } from './components/look1/look1.component';
import { Look2Component } from './components/look2/look2.component';
import { Look3Component } from './components/look3/look3.component';


const routes: Routes = [
  { path: '', component: InicialComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent},
  { path: 'area-privada', component: PrincipalComponent},
  { path: 'stylebox-info', component: StyleboxInfoComponent},
  { path: 'mis-suscripciones', component: AreaPrivadaComponent },
  { path: 'stylebox', component: StyleboxComponent },
  { path: 'cuestionario', component: CuestionarioComponent},
  { path: 'look1', component: Look1Component},
  { path: 'look2', component: Look2Component},
  { path: 'look3', component: Look3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
