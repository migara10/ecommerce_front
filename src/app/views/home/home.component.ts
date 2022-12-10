import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ItemComponent } from '../item/item.component'
import { OwlCarousel } from 'ngx-owl-carousel/src/owl-carousel.component';
import * as $ from "jquery";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* customOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  } */
  customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    onInitialized: this.counter,
    onTranslated: this.counter,
  }
  content1 = [
    { name: "Shirts", imageuri: 'Shirts', key: 'shirt' },
    { name: "T Shirts", imageuri: 'Tshirts', key: 'tshirt' },
    { name: "Shorts", imageuri: 'Shorts', key: 'short' },
    { name: "Trousers", imageuri: 'Trousers', key: 'trouser' },
  ]
  @ViewChild('owlElement1', { static: false }) owlElement1: any;
  isChild: Boolean = false;
  currentItem: any;
  products: any;
  selected: string = "";
  baseUri = this.api.API_URL;


  constructor(private spinner: NgxSpinnerService, private api: ApiServiseService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getAllProducts("");
    this.spinner.show();

    /* const el = $('#does-not-exist');
    const result1 = el?.offset()?.top; */

    $(document).ready(function () {
      $('div.top').click(function () {
        $('html, body').animate({
          scrollTop: $("div.middle").offset()?.top
        }, 1000)
      }),
        $('div.middle').click(function () {
          $('html, body').animate({
            scrollTop: $("div.bottom").offset()?.top
          }, 1000)
        }),
        $('div.bottom').click(function () {
          $('html, body').animate({
            scrollTop: $("div.top").offset()?.top
          }, 1000)
        })
    });
  }


  counter(event: any) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;
    if (item > items) {
      item = item - items
    }
    var className = `.owl-item .ban${item}`;
    $(`${className} .ani`).addClass("animate_sqre");
    for (let i = 1; i <= event.item.count; i++) {
      if (i != item) {
        var className1 = `.owl-item .ban${i}`;
        $(`${className1} .ani`).removeClass("animate_sqre");
      }
    }
    /* for (let i = 1; i <= event.item.count; i++) {
      var className1 = `.owl-item .ban${i}`;
      $(`${className1} .ani`).removeClass("animate_sqre");
    }
    setTimeout(() => {
      var className = `.owl-item .ban${item}`;
      $(`${className} .ani`).addClass("animate_sqre");
      console.log(className)
    }, 1); */
  }
  rotate(x: any) {
    if (x === 1) {
      this.owlElement1.next([200]);
    }
  }

  getAllProducts(key: any) {
    this.spinner.show();
    this.api.getresponse("get", `product?key=${key}`, {})
      .subscribe(res => {
        this.products = res.data;
        this.spinner.hide();

      },
        err => {
          this.spinner.hide();
        }
        

      )
  }
  /* getAllProductsByKey() {
    this.api.getresponse("get", `product?key=${this.limit}`, {})
      .subscribe(res => {
        this.products = res.data;
      },
        err => console.log(err)

      )
  } */
  openChild(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    this.dialog.open(ItemComponent, dialogConfig);
  }
  showPromoPresentage(item: any) {
    let temp = (item.product_price - item.product_promo_price) / item.product_price * 100
    return temp.toFixed(0)
  }
}

