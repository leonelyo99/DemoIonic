import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//paginas
import { PrincipalPage, 
  AjustesPage, 
  Ajustes2Page, 
  ModalPage, 
  Pagina2Page, 
  Pagina3Page, 
  TabsPage } from './pages/index.pages';
  
  //servicios
import { MutantesService } from './services/mutantes.service';


@NgModule({
  declarations: [ //aca se declaran los componentes
    AppComponent,
    PrincipalPage, 
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    TabsPage
  ],
  entryComponents: [ //aca se declaran las paginas
    PrincipalPage, 
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    TabsPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MutantesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
