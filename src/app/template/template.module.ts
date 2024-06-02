import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


@NgModule({
  declarations: [
    FooterComponent,
    SubFooterComponent,
    HeaderComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
