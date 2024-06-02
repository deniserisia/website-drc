import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSiteRoutingModule } from './web-site-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { CasesComponent } from './cases/cases.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    HomeComponent,
    HistoriaComponent,
    CasesComponent,
    ConsultoriaComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ]
})
export class WebSiteModule { }
