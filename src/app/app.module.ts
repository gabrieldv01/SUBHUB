import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { StyleboxInfoComponent } from './components/stylebox-info/stylebox-info.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    InicialComponent,
    PrincipalComponent,
    StyleboxInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
