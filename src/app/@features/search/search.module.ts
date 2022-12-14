import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/@shared';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [
    SearchComponent,
    SearchEngineComponent
  ]
})
export class SearchModule { }
