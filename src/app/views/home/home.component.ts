import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';

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
  products: any;
  baseUri = this.api.API_URL;
  constructor(private api: ApiServiseService) { }

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

}
