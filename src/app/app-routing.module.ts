import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CheckoutComponent } from './views/checkout/checkout.component';import { EditProductComponent } from './order/edit-product/edit-product.component';
import { EditProductPopupComponent } from './order/edit-product-popup/edit-product-popup.component';
import { ProductComponent } from './show/product/product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { isShow: true },
  },
  {
    path: 'product',
    pathMatch: 'full',
    component: ProductComponent,
    data: { isShow: true },
  },
  {
    path: 'checkout',
    pathMatch: 'full',
    component: CheckoutComponent,
    data: { isShow: false },
  },
  {
    path: 'edit_product',
    pathMatch: 'full',
    data: { isShow: false },
    component: EditProductComponent,
  },
  {
    path: 'edit_product',
    pathMatch: 'full',
    data: { isShow: false },
    component: EditProductPopupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
