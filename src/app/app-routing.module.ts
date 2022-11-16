import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { OrderListComponent } from './order/order-list/order-list.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { isShow: true },
  },
  {
    path: 'checkout',
    pathMatch: 'full',
    component: CheckoutComponent,
    data: { isShow: false },
  },
  {
    path: 'view_order',
    pathMatch: 'full',
    data: { isShow: false },
    component: OrderListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
