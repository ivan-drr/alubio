import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule
  ],
  declarations: [
    HomeComponent,
    BodyComponent
  ]
})
export class HomeModule { }
