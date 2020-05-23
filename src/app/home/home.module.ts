import { InformacoesComponent } from './informacoes/informacoes.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent, InformacoesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
