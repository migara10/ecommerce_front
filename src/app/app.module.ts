import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiseService } from './service/api-servise.service';
import { ItemComponent } from './views/item/item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavbarComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
  ],
  providers: [ApiServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
