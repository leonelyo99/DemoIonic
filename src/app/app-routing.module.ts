import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalPage, 
  AjustesPage, 
  Ajustes2Page, 
  ModalPage, 
  Pagina2Page, 
  Pagina3Page, 
  TabsPage } from './pages/index.pages';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalPage },
  { path: 'pagina2', component: Pagina2Page },
  { path: 'pagina3', component: Pagina3Page },
  { path: 'ajustes', component: AjustesPage },
  { path: 'ajustes2', component: Ajustes2Page},
  { path: 'modal', component: ModalPage},
  { path: 'tabs', 
    component: TabsPage, 
    children: [
        {
          path: 'principal',
          component: PrincipalPage 
        },
        {
          path: 'ajustes',
          component: AjustesPage
        },
      ] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
