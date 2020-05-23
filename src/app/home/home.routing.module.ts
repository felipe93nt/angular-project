import { InformacoesComponent } from './informacoes/informacoes.component';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'informacoes', component: InformacoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
