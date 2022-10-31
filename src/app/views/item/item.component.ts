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
    /* let users = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    users.forEach((data: any) => {
      console.log(data)
    }); */
  }

  ngOnChanges() {

  }

  selectSize(item: any) {
    this.selectedItem = item;
    this.selectQty = 1;
    this.maxLength = item.item_qty;
    this.isSelect = true;
  }

  incrementQty() {
    this.selectQty++;
  }

  decrementQty() {
    this.selectQty--;
  }
  addToCart(qty: Number) {
    this.arr = JSON.parse(localStorage.getItem("PendingOrder") || "[]")
    if (this.arr.length) {
      const dataq = this.arr.filter((data: any) => data.data.item_id === this.selectedItem.item_id);
      //console.log(dataq.length)
      if (dataq.length >= 1) {
        // console.log(this.arr)
        const index = this.arr.findIndex((x: any) => x.data.item_id ===this.selectedItem.item_id);
        // console.log(this.arr[index])
        const tempQty = this.arr[index].qty + qty
        // console.log(this.maxLength)
        if(tempQty <= this.maxLength) {
          this.arr[index].qty = tempQty
        }
        localStorage.setItem('PendingOrder', JSON.stringify(this.arr));
      } else {
        const order = {
          data: this.selectedItem,
          qty: qty
        }
        this.arr.push(order);
        localStorage.setItem('PendingOrder', JSON.stringify(this.arr));
      }
    } else {
      const order = {
        data: this.selectedItem,
        qty: qty
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
