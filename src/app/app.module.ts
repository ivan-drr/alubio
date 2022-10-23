import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './@shared';
import { FavoritesService, GorestService } from './@core';

import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BadgeModule,
    ImageModule
  ],
  providers: [GorestService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
