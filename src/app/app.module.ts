import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiseService } from './service/api-servise.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
