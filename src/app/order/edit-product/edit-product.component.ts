import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: any;
  baseUri = this.api.API_URL;

  constructor(private api:ApiServiseService) { }

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
  openChild(item: any){
    console.log(item)
  }

}
