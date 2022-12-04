import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditProductPopupComponent } from '../edit-product-popup/edit-product-popup.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: any;
  baseUri = this.api.API_URL;

  constructor(private api:ApiServiseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.api.getresponse("get", "product", {})
      .subscribe(res => {
        this.products = res.data;
        console.log(this.products)
      },
        err => console.log(err)

      )
  }
  openChild(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    this.dialog.open(EditProductPopupComponent, dialogConfig);
  }

}
