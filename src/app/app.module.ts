import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';
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
import { OrderListComponent } from './order/order-list/order-list.component';
import { AddProductComponent } from './order/add-product/add-product.component';
import { EditProductComponent } from './order/edit-product/edit-product.component';
import { AddItemsComponent } from './order/add-items/add-items.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavbarComponent,
    ItemComponent,
    ProductSidebarComponent,
    CheckoutComponent,
    OrderListComponent,
    AddProductComponent,
    EditProductComponent,
    AddItemsComponent,
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
  ],
  providers: [ApiServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
