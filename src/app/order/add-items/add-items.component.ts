import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  baseUri = this.api.API_URL;
  id = 1007;
  products: any;
  imageUri = ''

  productItem = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    product_category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    product_disc: new FormControl('', [Validators.required]),
    product_price: new FormControl('', [Validators.required]),
  })

  items = {
    xs: '',
    s: '',
    m: '',
    l: '',
    xl: '',
  }
  constructor(private api: ApiServiseService, private router: Router) { }

  ngOnInit(): void {
    this.getProductDetails();
    // this.productItem.value['product_name'] =  "migara";

  }
  getProductDetails() {
    this.api.getresponse("get", `product/${this.id}`, {})
      .subscribe(res => {
        this.products = res.data[0];
        this.productItem.setValue({
          product_name: this.products.product_name,
          product_category: this.products.product_category,
          product_disc: this.products.product_disc,
          product_price: this.products.product_price,
        })
        this.imageUri = this.products.product_imageuri;
      },
        err => console.log(err)

      )
  }
  addItemQtys() {
    const data = {
      product_id: this.id,
      product_items: this.items
    }
    this.api.getresponse("post", "item", data)
      .subscribe(res => {
        this.router.navigate(['/']); 
      },
        err => console.log(err)

      )
  }

}
