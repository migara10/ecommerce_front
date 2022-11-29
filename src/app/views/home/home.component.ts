import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ItemComponent } from '../item/item.component'
import { OwlCarousel } from 'ngx-owl-carousel/src/owl-carousel.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement1', {static: false}) owlElement1: any;
  isChild: Boolean = false;
  currentItem: any;
  products: any;
  selected: string = "";
  baseUri = this.api.API_URL;


  constructor(private api: ApiServiseService, private dialog: MatDialog) { }
  ngOnInit(): void {
    
    this.getAllProducts();
    /* var $buttonRow1 = $('.button-row1');
    var $activeButton1 = $buttonRow1.find('.button.is-active');

    $buttonRow1.on('click', '.button',  (event: any) => {
      // deactivate previous button
      $activeButton1.removeClass('is-active');
      // set & activate new button
      $activeButton1 = $(this);
      $activeButton1.addClass('is-active');
    }); */


  }
  rotate(x: any) {
    if (x === 1) {
      this.owlElement1.next([200]);
    }
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
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    /* dialogConfig.position = {
      'top': '0',
      left: '0'
    } */
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    this.dialog.open(ItemComponent, dialogConfig);

  }

}

