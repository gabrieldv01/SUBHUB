import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { StyleboxInfoComponent } from './components/stylebox-info/stylebox-info.component';
import { AreaPrivadaComponent } from './components/area-privada/area-privada.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { Look1Component } from './components/look1/look1.component';
import { Look2Component } from './components/look2/look2.component';
import { Look3Component } from './components/look3/look3.component';
import { TallaComponent } from './components/talla/talla.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    InicialComponent,
    PrincipalComponent,
    StyleboxInfoComponent,
    AreaPrivadaComponent,
    CuestionarioComponent,
    Look1Component,
    Look2Component,
    Look3Component,
    TallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
