import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersRoutingModule } from './owners-routing.module';

import { OwnersComponent } from './owners.component';
import { SharedModule } from 'src/app/@shared';


@NgModule({
  imports: [
    CommonModule,
    OwnersRoutingModule,
    SharedModule
  ],
  declarations: [
    OwnersComponent
  ],
})
export class OwnersModule { }
