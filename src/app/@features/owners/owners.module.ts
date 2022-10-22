import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersRoutingModule } from './owners-routing.module';

import { OwnersComponent } from './owners.component';
import { ListComponent } from './list/list.component';
import { SummarizeTextPipe } from 'src/app/@shared';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table'
import { SkeletonModule } from 'primeng/skeleton';
import { GorestService } from 'src/app/@core';

@NgModule({
  imports: [
    CommonModule,
    OwnersRoutingModule,
    CardModule,
    TableModule,
    SkeletonModule
  ],
  declarations: [
    OwnersComponent,
    ListComponent,
    SummarizeTextPipe
  ],
  providers: [GorestService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OwnersModule { }
