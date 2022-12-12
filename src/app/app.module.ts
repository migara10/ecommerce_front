import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ProductSidebarComponent } from './nav/product-sidebar/product-sidebar.component'
import { HttpClientModule } from '@angular/common/http';
import { ApiServiseService } from './service/api-servise.service';
import { ItemComponent } from './views/item/item.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { AddProductComponent } from './order/add-product/add-product.component';
import { EditProductComponent } from './order/edit-product/edit-product.component';
import { EditProductPopupComponent } from './order/edit-product-popup/edit-product-popup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProductComponent } from './show/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ItemComponent,
    ProductSidebarComponent,
    CheckoutComponent,
    AddProductComponent,
    EditProductComponent,
    EditProductPopupComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwlModule,
    MaterialModule,
    MatCardModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
