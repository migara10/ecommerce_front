import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { EditProductPopupComponent } from '../edit-product-popup/edit-product-popup.component';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: any;
  baseUri = this.api.API_URL;

  constructor(private api: ApiServiseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.api.getresponse("get", "product", {})
      .subscribe(res => {
        this.products = res.data;
      },
        err => console.log(err)

      )
  }
  openChild(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    const dialogRef = this.dialog.open(EditProductPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    })
  }

  /* openDialog() {
    const ref = this.dialog.open(EditProductPopupComponent);
    const sub = ref.componentInstance.onAdd.subscribe((data) => {
      console.log('hiiii');
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  } */


}
