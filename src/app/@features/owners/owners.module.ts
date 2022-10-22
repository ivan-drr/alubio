import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersRoutingModule } from './owners-routing.module';

import { OwnersComponent } from './owners.component';
import { ListComponent } from './list/list.component';
import { SummarizeTextPipe } from 'src/app/@shared';
import { DetailsModalComponent } from 'src/app/@shared';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table'
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    OwnersRoutingModule,
    CardModule,
    TableModule,
    SkeletonModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [
    OwnersComponent,
    ListComponent,
    SummarizeTextPipe,
    DetailsModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class OwnersModule { }
