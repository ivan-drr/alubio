import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersRoutingModule } from './owners-routing.module';

import { OwnersComponent } from './owners.component';

@NgModule({
  imports: [
    CommonModule,
    OwnersRoutingModule
  ],
  declarations: [OwnersComponent]
})
export class OwnersModule { }
