import { BrowserModule } from '@angular/platform-browser';
import { SobreComponent } from './sobre/sobre.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent, InformacoesComponent, SobreComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
