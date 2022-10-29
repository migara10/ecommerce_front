import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ItemComponent } from '../item/item.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* public products = {
    product_id: "",
    product_name: "",
    product_category: "",
    product_disc: "",
    product_imageuri: "",
  }; */
  isChild: Boolean = false;
  currentItem: any;
  products: any;
  selected: string = "";
  baseUri = this.api.API_URL;


  constructor(private api: ApiServiseService, private dialog: MatDialog) { }


  /* openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ItemComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  } */
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    /* dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '0',
      left: '0'
    }; */
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(ItemComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.getAllProducts();

  }

  getAllProducts() {
    this.api.getresponse("get", "product", {})
      .subscribe(res => {
        this.products = res.data;
        console.log(this.products)
        console.log(this.api.API_URL)
      },
        err => console.log(err)

      )
  }
  openChild(product: any, enterAnimationDuration: string, exitAnimationDuration: string) {
    this.isChild = true;
    this.currentItem = product;
    this.dialog.open(ItemComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

}

