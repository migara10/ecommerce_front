import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiseService } from 'src/app/service/api-servise.service';
@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss']
})
export class ProductSidebarComponent implements OnInit {
  items: any = [];
  baseUri = this.api.API_URL;
  isEmpty = true;
  constructor(private api: ApiServiseService, public dialogRef: MatDialogRef<ProductSidebarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length? false: true;
  }

  removeItem(item: any) {
    const index = this.items.findIndex((x: any) => x.data.item_id === item.data.item_id);
    this.items.splice(index, 1);
    localStorage.removeItem("PendingOrder");
    localStorage.setItem('PendingOrder', JSON.stringify(this.items));
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length? false: true;
    if(this.isEmpty){
      this.dialogRef.close();
    }
  }
  checkoutCart() {
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.saveAllCartItems(this.items);

  }

  saveAllCartItems(items: any) {
    this.api.getresponse("put", "item", items)
      .subscribe(res => {
        localStorage.removeItem("PendingOrder");
        this.dialogRef.close();
        window.location.reload();
      },
        err => console.log(err)

      )
  }

}
