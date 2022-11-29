import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  items: any = [];
  baseUri = this.api.API_URL;
  isEmpty = true;
  selectedFile: any;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });


  productItem = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    product_category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    product_disc: new FormControl('', [Validators.required]),
    product_price: new FormControl('', [Validators.required]),
  })


  constructor(private location: Location, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private api: ApiServiseService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length ? false : true;
  }
  getTotal() {
    let tot = 0
    this.items.forEach((element: any) => {
      // console.log(element.total_price)
      tot = element.total_price + tot
    });
    return tot;
  }
  removeItem(item: any) {
    const index = this.items.findIndex((x: any) => x.data.item_id === item.data.item_id);
    this.items.splice(index, 1);
    localStorage.removeItem("PendingOrder");
    localStorage.setItem('PendingOrder', JSON.stringify(this.items));
    this.toastr.warning(`size ${item.data.item_name}`, `remove ${item.product_name}`);
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length ? false : true;
    if (this.isEmpty) {
      this.router.navigate(['']);
    }
  }

  get f() {
    return this.productItem.controls;
  }
  goBack() {
    this.location.back();
  }
  onFileSelected = (event: any) => {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  };

  saveNews() {
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    fd.append("product_name", this.productItem.value['product_name'] || '');
    fd.append("product_category", this.productItem.value['product_category'] || '');
    fd.append("product_disc", this.productItem.value['product_disc'] || '');
    fd.append("product_price", this.productItem.value['product_price'] || '');

    this.api.getresponse("post", "product", fd)
      .subscribe(res => {
        this.toastr.success(res.msg);
        this.router.navigate(['/add_items'] , { queryParams: { id: res.data.product_id}});
      },
        err => console.log(err)

      )
  };



}
