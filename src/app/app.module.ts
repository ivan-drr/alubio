import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './@shared';
import { GorestService, FavoritesService, GorestInterceptorService } from './@core';

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
  providers: [
    GorestService,
    FavoritesService,
    { provide: HTTP_INTERCEPTORS, useClass: GorestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
