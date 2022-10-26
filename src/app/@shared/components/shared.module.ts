import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsModalComponent } from './details-modal/details-modal.component';
import { FavoritesModalComponent } from './favorites-modal/favorites-modal.component';
import { HeaderComponent } from './header/header.component';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { SummarizeTextPipe } from '../pipes/summarize-text.pipe';
import { NumberToStringPipe } from '../pipes/number-to-string.pipe';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    SkeletonModule,
    DialogModule,
    ButtonModule,
    ImageModule,
    BadgeModule,
    InputTextModule,
    CardModule
  ],
  declarations: [
    DetailsModalComponent,
    FavoritesModalComponent,
    HeaderComponent,
    OwnersListComponent,
    WrapperComponent,
    SummarizeTextPipe,
    NumberToStringPipe
  ],
  exports: [
    DetailsModalComponent,
    FavoritesModalComponent,
    HeaderComponent,
    OwnersListComponent,
    WrapperComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
