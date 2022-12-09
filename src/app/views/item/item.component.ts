import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiseService } from 'src/app/service/api-servise.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  description: string = "";
  baseUri = this.api.API_URL;
  items: any;
  selectQty = 1;
  maxLength = 0;
  isSelect = false;
  selectedItem: any = []
  // arr = JSON.parse(localStorage.getItem("PendingOrder") || "[]")
  arr: any = []
  @Input()
  public item: any = {}; // decorate the property with @Input()
  // public items: any; // decorate the property with @Input()
  constructor(public dialogRef: MatDialogRef<ItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiServiseService) { }

  ngOnInit(): void {
    this.items = this.data.productbyItem.filter((data: any) => data.item_qty != 0);
    this.items.sort((a: any, b: any) => (a.item_id.split('/')[1]) - (b.item_id.split('/')[1]));
  }

  ngOnChanges() {

  }

  selectSize(item: any) {
    this.selectedItem = item;
    this.selectQty = 1;
    this.maxLength = item.item_qty;
    this.isSelect = true;
    $('#other-field').focus(function () {
      $('#other').prop("checked", true);
    });
  }

  incrementQty() {
    this.selectQty++;
  }

  decrementQty() {
    this.selectQty--;
  }
  addToCart(qty: number) {
    this.arr = JSON.parse(localStorage.getItem("PendingOrder") || "[]")
    if (this.arr.length) {
      const dataq = this.arr.filter((data: any) => data.data.item_id === this.selectedItem.item_id);
      //console.log(dataq.length)
      if (dataq.length >= 1) {
        // console.log(this.arr)
        const index = this.arr.findIndex((x: any) => x.data.item_id === this.selectedItem.item_id);
        // console.log(this.arr[index])
        const tempQty = this.arr[index].qty + qty;
        const tempTotal = this.arr[index].unit_price * tempQty;
        // console.log(this.maxLength)
        if (tempQty <= this.maxLength) {
          this.arr[index].qty = tempQty
          this.arr[index].total_price = tempTotal
        }
        localStorage.setItem('PendingOrder', JSON.stringify(this.arr));
      } else {
        const order = {
          data: this.selectedItem,
          qty: qty,
          product_imageuri: this.data.product_imageuri,
          product_category: this.data.product_category,
          product_disc: this.data.product_disc,
          product_name: this.data.product_name,
          unit_price:
            this.data.isPromo ? this.data.product_promo_price : this.data.product_price,
          total_price: (this.data.isPromo ? this.data.product_promo_price * qty : this.data.product_price * qty)

        }
        this.arr.push(order);
        localStorage.setItem('PendingOrder', JSON.stringify(this.arr));
      }
    } else {
      const order = {
        data: this.selectedItem,
        qty: qty,
        product_imageuri: this.data.product_imageuri,
        product_category: this.data.product_category,
        product_disc: this.data.product_disc,
        product_name: this.data.product_name,
        unit_price:
          this.data.isPromo ? this.data.product_promo_price : this.data.product_price,
        total_price: (this.data.isPromo ? this.data.product_promo_price * qty : this.data.product_price * qty)

      }
      this.arr.push(order);
      localStorage.setItem('PendingOrder', JSON.stringify(this.arr));
    }


  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
