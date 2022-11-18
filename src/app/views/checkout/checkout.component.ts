import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { parseHTML } from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any = [];
  baseUri = this.api.API_URL;
  isEmpty = true;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });



  userDataForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  })




  /* userDataForm = this.formBuilder.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    mobile: ['', Validators.required],
  }) */

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
    /* console.log(item.product_name)
    console.log(item.data.item_name) */
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

  checkoutOrder() {
    console.log(this.userDataForm.value);
    const queryParams = {
      item: this.items,
      user: this.userDataForm.value
    }
    this.api.getresponse("post", "order", queryParams)
      .subscribe(res => {
        this.toastr.success(res.msg);
        /* localStorage.removeItem("PendingOrder");
        this.router.navigate(['/']); */
      },
        err => console.log(err)

      )
  }
  get f() {
    return this.userDataForm.controls;
  }
  goBack() {
    this.location.back();
  }



}
