import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetalleComponent } from './detalle/detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    AboutComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
