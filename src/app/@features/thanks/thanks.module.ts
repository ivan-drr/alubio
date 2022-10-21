import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksRoutingModule } from './thanks-routing.module';

import { ThanksComponent } from './thanks.component';

@NgModule({
  imports: [
    CommonModule,
    ThanksRoutingModule
  ],
  declarations: [ThanksComponent]
})
export class ThanksModule { }
