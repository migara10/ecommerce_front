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
  isChild: Boolean = false;
  currentItem: any;
  products: any;
  selected: string = "";
  baseUri = this.api.API_URL;


  constructor(private api: ApiServiseService, private dialog: MatDialog) { }
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
  openChild(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    /* dialogConfig.position = {
      'top': '0',
      left: '0'
    } */
    dialogConfig.width = '300px';
    dialogConfig.height = '200px';
    this.dialog.open(ItemComponent, dialogConfig);

  }

}

